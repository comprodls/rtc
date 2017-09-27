var OpenTok = require('opentok');
var apiKey = "45965982";
var apiSecret = "ff63248cb665f7c05779280596fe3dc0a5ac63d4";
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


