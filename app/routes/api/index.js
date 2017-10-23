var openTok = require("./opentok-custom.js");

//var Opentok = require("opentok");
var request = require("request");



var OT = openTok.getOpentokHandle("45979002"), session;
OT.createSession({mediaMode:"routed"}, function(err, OTsession) {
  if (err) return console.log(err);
  console.log('session');
  console.log(OTsession);
  session = OTsession;
});

exports.createToken = function(req, res, next) {
  console.log("Inside createSession function");
  var token = session.generateToken({
    expireTime : (new Date().getTime() / 1000)+(1 * 60 * 60), // in one hour
    data :       "name=Johnny",
    initialLayoutClassList : [req.query.layoutClass]
  });
  res.status(200).send({ token: token, sessionId: session.sessionId });

};

exports.startRecording = function (req, res, next) {
  console.log("Inside startRecording function");
  var sessionId = req.query.sessionId;

  var OT = openTok.getOpentokHandle(req.query.apiKey);
  var options = {
    name: "Important_Presentation",
    outputMode: "composed",
    "layout": {
      "type": "verticalPresentation"
    }
  };
  OT.startArchive(sessionId, options, function(err, archive) {
      if (err) {
        next(err);
      } else {
        // The id property is useful to save off into a database
        res.status(200).send(archive);
      }
  });
};

exports.stopRecording = function (req, res, next) {
  console.log("Inside stopRecording function");
  var archiveId = req.query.archiveId;
  var OT = openTok.getOpentokHandle(req.query.apiKey);

  OT.stopArchive(archiveId, function(err, archive) {
      if (err) {
          next(err);
      } else {
          res.status(200).send(archive);
      }
  });

};

exports.getRecording = function (req, res, next) {
  console.log("Inside getRecording function");
  var archiveId = req.query.archiveId;
  var OT = openTok.getOpentokHandle(req.query.apiKey);

  OT.getArchive(archiveId, function(err, archive) {
      if (err) {
          next(err);
      } else {
          res.status(200).send(archive);
      }
  });

};
