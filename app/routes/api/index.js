var openTok = require("./opentok-custom.js");

exports.startRecording = function (req, res, next) {
  console.log("Inside startRecording function");
  var sessionId = req.query.sessionId;
  var OT = openTok.getOpentokHandle(req.query.apiKey);

  OT.startArchive(sessionId, { name: 'Important Presentation' }, function(err, archive) {
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
