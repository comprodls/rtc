var openTok = require("./opentok-custom.js");

exports.generateToken = function (req, res, next) {
  console.log("Inside generateToken function");

  var sessionId = req.params.sessionid;
  var OT = openTok.getOpentokHandle(req.query.apiKey);
  var options = {
    role: 'publisher',
    expireTime: (new Date().getTime() / 1000)+(7 * 24 * 60 * 60), // in one week
    data: 'name=Johnny',
    initialLayoutClassList: ['full']
  };
  var token = OT.generateToken(sessionId, options);
  res.status(200).send({token: token});
};

exports.startRecording = function (req, res, next) {
  console.log("Inside startRecording function");
  var sessionId = req.query.sessionId;
  var OT = openTok.getOpentokHandle(req.query.apiKey);
  var options = {
    name: "Important Presentation",
    outputMode: "composed",
    "layout": {
      "type": "pip"
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
