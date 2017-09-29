#!/usr/bin/env node
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var pubNub = require('pubnub');
var OpenTok = require('opentok');

var opentokAPIKey = "45969392";
var opentokAPISecret = "92d45711907fa19252f9012677353e729a817d83";
var otClient = new OpenTok(opentokAPIKey, opentokAPISecret);
var _sessionMap = {};

//pubnub keys
//jsk-dls-rtc-keyset App
var secretKey = "sec-c-NDY0NDAwYzktMjNkNS00NDIzLTg1Y2ItYmI3MjExZjliMzU5",
    publishKey = 'pub-c-6783ca6f-964d-4bca-b9ac-d7528be1e353',
    subscribeKey = 'sub-c-949b8e8e-240a-11e7-b284-02ee2ddab7fe';

var app = express();
var pubnubAdminClient;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));


app.post('/grant', function(req, res, next) {
    pubnubAdminClient = new pubNub({
        publishKey: publishKey,
        subscribeKey: subscribeKey,
        secretKey: secretKey
    });

    var authKey =  "prerak_authkey";

    pubnubAdminClient.grant(
        {
            channels  : [ 'compro_webrtc', 'compro_webrtc-pnpres'],
            authKeys : [ authKey ],
            read     : true,
            write    : true,
            ttl      : 1000
        },
        function () {
            res.send({ authKey: authKey });
        }
    );
});

app.post('/sessions', function(req, res, next) {
    otClient.createSession({mediaMode:"routed"}, function(err, session) {
        if (err) {
            next(err);
        } else {
            _sessionMap[session.sessionId] = {
                id: session.sessionId,
                token: session.generateToken({
                    expireTime: Math.round(Date.now() / 1000) + 60
                })
            };
            res.send(_sessionMap[session.sessionId]);
        }
    });
});

app.get('/sessions/:sessionId', function(req, res , next) {
    var sessionId = req.param('sessionId');
    if(_sessionMap[sessionId]) {
        res.send(_sessionMap[sessionId]);
    } else {
        res.status(404).send({message: 'Session with sessionid: ' + sessionId + ' not found.'});
    }
});

app.post('/archives/start', function(req, res , next) {
    var sessionId = req.body.sessionId;
    otClient.startArchive(sessionId, { name: 'Tokbox Test Archive' }, function(err, archive) {
        if (err) {
            next(err);
        } else {
            // The id property is useful to save off into a database
            return res.status(200).send(archive);
        }
    });
});

app.get('/archives', function(req, res , next) {
    res.send("OK");
});

app.get('/archives/:archiveID', function(req, res , next) {
    res.send("OK");
});

app.post('/archives/:archiveId/stop', function(req, res , next) {
    var archiveId = req.params.archiveId;
    otClient.stopArchive(archiveId, function(err, archive) {
        if (err) {
            next(err);
        } else {
            return res.status(200).send(archive);
        }
    });
});

app.use('/archives/updates', function(req, res, next) {
    console.log(req);
    pubnubAdminClient.publish({
        message: {
            sender: 'tokbox',
            data: req
        },
        channel: 'compro_webrtc'
    });
    res.send({'message': 'Data received.'});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.send({ message: err.message, error: err });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({ message: err.message, error: {} });
});

app.set('port', process.env.PORT || 80);

var server = app.listen(app.get('port'), function() {
  //debug('Express server listening on port ' + server.address().port);
  console.log('Express server listening on port ' + server.address().port);
  console.log('started');
});
