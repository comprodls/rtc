var OpenTok = require('opentok');
var apiKey = "45979002";
var apiSecret = "cba8b72f6b5f8320c7e517f29fab5a102ecd49d4";
opentok = new OpenTok(apiKey, apiSecret);


exports.startRecording = function (req, res, next) {

  var sessionId = req.query.sessionId;

  opentok.startArchive(sessionId, { name: 'Important Presentation' }, function(err, archive) {
      if (err) {
        return res.status(200).send(err);
      } else {
        // The id property is useful to save off into a database
        return res.status(200).send(archive);
      }
  });
};

exports.stopRecording = function (req, res, next) {

  var archiveId = req.query.archiveId;

  opentok.stopArchive(archiveId, function(err, archive) {
      if (err) {
          return res.status(200).send(err);
      } else {
          return res.status(200).send(archive);
      }
  });

};

exports.getRecording = function (req, res, next) {

  var archiveId = req.query.archiveId;

  opentok.getArchive(archiveId, function(err, archive) {
      if (err) {
          return res.status(200).send(err);
      } else {
          return res.status(200).send(archive);
      }
  });

};


