// S3 configs
var awsBaseUrl = "https://s3.amazonaws.com";
var bucket = "vhl-demo";
var recordingName = "archive.mp4";

// tokbox account - dlsadmin@comprotechnologies.com
var regularProjectApiKey = 45965982;
var safariProjectApiKey = 45979002;

var roomHashMap = {
    regular_room_1: {
        apiKey: regularProjectApiKey,
        sessionId: "1_MX40NTk2NTk4Mn5-MTUwNzg3MzU5NDI2NX5JVE5LNnNIZzhWL01BdFhlYlVyR0prTEJ-fg"
    },
    regular_room_2: {
        apiKey: regularProjectApiKey,
        sessionId: "2_MX40NTk2NTk4Mn5-MTUwNzg3MzY0NTk2MH5QM1A5YnlEdS94OXNJandSRjd6NEduTm9-fg"
    },
    regular_room_3: {
        apiKey: regularProjectApiKey,
        sessionId: "1_MX40NTk2NTk4Mn5-MTUwNzg3MzY4MjI4NH4yMHY5dkJNaVc1cDZEc1dvampmbW5xVHN-fg"
    },
    safari_room_1: {
        apiKey: safariProjectApiKey,
        sessionId: "2_MX40NTk3OTAwMn5-MTUwNzg3MzcyMDg2OX5pK0swbkpET2RwVW40TmQ4bGxMM2tjMkt-fg"
    },
    safari_room_2: {
        apiKey: safariProjectApiKey,
        sessionId: "1_MX40NTk3OTAwMn5-MTUwNzg3Mzc2MTcxMH5qZXJTTWNTcWxieTI4Q1lBb2dhSnJCUzR-fg"
    }
};

var archiveId = "";
var session, subscriber, debugInfo = {}, chatRoom, audioOnly, name ="";

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    resetUI();
    console.log(error);
  }
}

function resetUI() {
    $("#start-recording").show();
    $("#stop-recording").hide();
    $("#play-recording").hide();
    $("#connect").show();
    $("#disconnect").hide();
    $("#start-recording").prop("disabled", true);
    $("#modal-text").text('');
}


function initializeSession(apiKey, sessionId, publishVideo) {
    session = OT.initSession(apiKey, sessionId);

    // Subscribe to a newly created stream
    session.on("streamCreated", function(event) {
      debugInfo["ice-servers"] = event.target.sessionInfo.iceServers;
      debugInfo["priority-video-codec"] = event.target.sessionInfo.priorityVideoCodec;
      debugInfo["media-server-name"] = event.target.sessionInfo.mediaServerName;

      debugInfo["destroyed-reason"] = event.stream.destroyedReason;
      debugInfo["has-audio"] = event.stream.hasAudio;
      debugInfo["has-video"] = event.stream.hasVideo;

      subscriber = session.subscribe(event.stream, "subscriber", {
        insertMode: "append",
        width: "100%",
        height: "100%"
      }, function(err) {
        if(err) {
          handleError();
        } else {
          subscriber.getStats(function(err, data) {
            if(err) { console.log(err); }
            if(data) { debugInfo.stats = data; }
            var a = JSON.stringify(debugInfo, 0, 4);
            $("#debug-body").html("Debug Info<br><pre style='height: 98%'>" + a + "</pre>");
          });

          if (subscriber.stream.hasVideo) {
            var imgData = subscriber.getImgData();
            subscriber.setStyle("backgroundImageURI", imgData);
          } else {
            subscriber.setStyle("backgroundImageURI",
              "https://yt3.ggpht.com/-XasXu4GveZU/AAAAAAAAAAI/AAAAAAAAAAA/CDFNDspUDV0/s900-c-k-no-mo-rj-c0xffffff/photo.jpg");
          }
        }
      });
    });

    // Create a publisher
    var publisher = OT.initPublisher("publisher", {
      insertMode: "append",
      width: "100%",
      height: "100%",
      publishVideo: publishVideo,
      name: name,
      style: {
        nameDisplayMode: "on",
        backgroundImageURI: "https://yt3.ggpht.com/-XasXu4GveZU/AAAAAAAAAAI/AAAAAAAAAAA/CDFNDspUDV0/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
      }
    }, handleError);

    console.log("@@@@@@@@@@@@@")
    $.ajax({
        "type": "POST",
        "url": "/api/session/" + sessionId + "/token?apiKey=" + roomHashMap[chatRoom].apiKey,
        "dataType": "json",
        "contentType": "application/json",
        "success": function (data) {
            // Connect to the session
            session.connect(data.token, function(error) {
              // If the connection is successful, initialize a publisher and publish to the session
              if (error) {
                handleError(error);
              } else {
                session.publish(publisher, handleError);
              }
            });
        },
        "error": function(data) { console.log(data); }
    });
}

$("#connect").click(function(e) {

  if(!session) {
    e.preventDefault();
    chatRoom = $("#chat_rooms").val();
    console.log("chatRoom = " + chatRoom);
    console.log("apiKey = " + roomHashMap[chatRoom].apiKey);
    audioOnly = $("#audio-only").val();
    audioOnly = (audioOnly === "true") ? true : false ;
    console.log("Publish Video:");
    console.log(!audioOnly);
    name = $("#name").val();

    // Call to initialise session
    initializeSession(roomHashMap[chatRoom].apiKey, roomHashMap[chatRoom].sessionId, !audioOnly);

    $("#connect").hide();
    $("#disconnect").show();
    $("#start-recording").prop("disabled", false);
  } else {
    console.log("Error: Session Already Created. Please disconnect or refresh the page.");
  }

});

$("#disconnect").click(function(e) {
    e.preventDefault();

    if(session) {
      session.disconnect();
      session = null;
      resetUI();
      window.location.reload();
    } else {
      console.log("Error: Session not yet started!");
    }
});


$("#start-recording").click(function (e) {
    e.preventDefault();

    $.ajax({
        "type": "GET",
        "url": "/api/recording/start?apiKey=" + roomHashMap[chatRoom].apiKey +
                                    "&sessionId=" + roomHashMap[chatRoom].sessionId,
        "dataType": "json",
        "contentType": "application/json",
        "success": function (data) {
            console.log(data);
            archiveId = data.id;
            $("#start-recording").hide();
            $("#stop-recording").show();
        },
        "error": function(data) {
            console.log(data);
        }
    });
});


$("#stop-recording").click(function (e) {
    e.preventDefault();

     $.ajax({
        "type": "GET",
        "url": "/api/recording/stop?apiKey=" + roomHashMap[chatRoom].apiKey +
                                    "&archiveId=" + archiveId,
        "dataType": "json",
        "contentType": "application/json",
        "success": function (data) {
            console.log(data);
            $("#stop-recording").hide();
            $("#play-recording").show();

        },
        "error": function(data) {
            console.log(data);
        }
    });

});

$("#play-recording").click(function (e) {
    e.preventDefault();
    $("#modal-text").text("");
    $.ajax({
        "type": "GET",
        "url": "/api/recording/details?apiKey=" + roomHashMap[chatRoom].apiKey +
                                    "&archiveId=" + archiveId,
        "dataType": "json",
        "contentType": "application/json",
        "success": function (data) {
            console.log(data);

            var recordingUrl;
            if(data.status === "available") {
                recordingUrl = data.url;
            } else if(data.status === "uploaded") {
                recordingUrl = awsBaseUrl + "/" + bucket + "/" + roomHashMap[chatRoom].apiKey +
                            "/" + data.id + "/" + recordingName;
            } else {
                $("#modal-text").text("Error: Recording is not available yet. Please try again after a few seconds.");
            }

            if(recordingUrl) {
                var str = recordingUrl.substring(0, 50);
                $("#modal-text").html("Here is the recording. URL : <a href=\"" + recordingUrl +
                                      "\" target=\"_blank\" text-overflow=\"ellipsis\">" + str +
                                      "...</a>");
                $("#start-recording").show();
                $("#play-recording").hide();
            }
        },
        "error": function(data) {
            console.log(data);
        }
    });
});

