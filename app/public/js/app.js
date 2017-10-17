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
        sessionId: "1_MX40NTk2NTk4Mn5-MTUwNzg3MzU5NDI2NX5JVE5LNnNIZzhWL01BdFhlYlVyR0prTEJ-fg",
        token: "T1==cGFydG5lcl9pZD00NTk2NTk4MiZzaWc9NWZlMWVkZjk1N2JmYzZiN2IxNTIwMTJkYmNlNTBiMzFhNjBlZTVlNjpzZXNzaW9uX2lkPTFfTVg0ME5UazJOVGs0TW41LU1UVXdOemczTXpVNU5ESTJOWDVKVkU1TE5uTklaemhXTDAxQmRGaGxZbFZ5UjBwclRFSi1mZyZjcmVhdGVfdGltZT0xNTA3ODczNjI5Jm5vbmNlPTAuMzkwNjM3ODIzODAzOTYzODQmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUxMDQ2NTYyNCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ=="
    },
    regular_room_2: {
        apiKey: regularProjectApiKey,
        sessionId: "2_MX40NTk2NTk4Mn5-MTUwNzg3MzY0NTk2MH5QM1A5YnlEdS94OXNJandSRjd6NEduTm9-fg",
        token: "T1==cGFydG5lcl9pZD00NTk2NTk4MiZzaWc9M2E3ODQzMDcxYzdlY2I4NjE5OWUwYzM0OGU3OWZiOTg3YWYyYzdiZDpzZXNzaW9uX2lkPTJfTVg0ME5UazJOVGs0TW41LU1UVXdOemczTXpZME5UazJNSDVRTTFBNVlubEVkUzk0T1hOSmFuZFNSamQ2TkVkdVRtOS1mZyZjcmVhdGVfdGltZT0xNTA3ODczNjYzJm5vbmNlPTAuMTY4MzE1MjExMjU2NzgxMTcmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUxMDQ2NTY2MiZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ=="
    },
    regular_room_3: {
        apiKey: regularProjectApiKey,
        sessionId: "1_MX40NTk2NTk4Mn5-MTUwNzg3MzY4MjI4NH4yMHY5dkJNaVc1cDZEc1dvampmbW5xVHN-fg",
        token: "T1==cGFydG5lcl9pZD00NTk2NTk4MiZzaWc9NzRlMWNkMzdiMjZiMzU2YjZhMzJjMDA2ZTM3MDRlNDA2ZGE0MTFiNjpzZXNzaW9uX2lkPTFfTVg0ME5UazJOVGs0TW41LU1UVXdOemczTXpZNE1qSTROSDR5TUhZNWRrSk5hVmMxY0RaRWMxZHZhbXBtYlc1eFZITi1mZyZjcmVhdGVfdGltZT0xNTA3ODczNjk1Jm5vbmNlPTAuODk5NDIyNjI4MzYzNTM0NyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTEwNDY1Njk1JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9"
    },
    safari_room_1: {
        apiKey: safariProjectApiKey,
        sessionId: "2_MX40NTk3OTAwMn5-MTUwNzg3MzcyMDg2OX5pK0swbkpET2RwVW40TmQ4bGxMM2tjMkt-fg",
        token: "T1==cGFydG5lcl9pZD00NTk3OTAwMiZzaWc9OWQyY2QxZDdiOWQwZGI5Y2E5YWM4MjVlMWEyMGI2ZjY1MzdmODUzMDpzZXNzaW9uX2lkPTJfTVg0ME5UazNPVEF3TW41LU1UVXdOemczTXpjeU1EZzJPWDVwSzBzd2JrcEVUMlJ3Vlc0MFRtUTRiR3hNTTJ0ak1rdC1mZyZjcmVhdGVfdGltZT0xNTA4MjIwNTMxJm5vbmNlPTAuNTY4OTk3OTMxMzY4MTI1JnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE1MTA4MTI1MjkmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0="
    },
    safari_room_2: {
        apiKey: safariProjectApiKey,
        sessionId: "1_MX40NTk3OTAwMn5-MTUwNzg3Mzc2MTcxMH5qZXJTTWNTcWxieTI4Q1lBb2dhSnJCUzR-fg",
        token: "T1==cGFydG5lcl9pZD00NTk3OTAwMiZzaWc9NTkyOGU5YzA0NmU3YTIyY2E2OTZmNzVkMWQ4NjdmOGQwYjcxNmU5MzpzZXNzaW9uX2lkPTFfTVg0ME5UazNPVEF3TW41LU1UVXdOemczTXpjMk1UY3hNSDVxWlhKVFRXTlRjV3hpZVRJNFExbEJiMmRoU25KQ1V6Ui1mZyZjcmVhdGVfdGltZT0xNTA4MjIwNTU0Jm5vbmNlPTAuNzk0NzQ4OTc3NzMyNTQ4OSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTEwODEyNTUzJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9"
    }
};

var archiveId = "";
var session, subscriber, debugInfo = {}, chatRoom, audioOnly;

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


function initializeSession(apiKey, sessionId, token, publishVideo) {
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
          $("#debug-body").html("Debug Info<br><pre style='height: 100%'>" + a + "</pre>");
        });

        if (subscriber.stream.hasVideo) {
          var imgData = subscriber.getImgData();
          subscriber.setStyle('backgroundImageURI', imgData);
        } else {
          subscriber.setStyle('backgroundImageURI',
            'https://tokbox.com/img/styleguide/tb-colors-cream.png'
          );
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
    name: "Anupam",
    style: {
      nameDisplayMode: "on"
    }
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, initialize a publisher and publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
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

    // Call to initialise session
    initializeSession(roomHashMap[chatRoom].apiKey, roomHashMap[chatRoom].sessionId,
                      roomHashMap[chatRoom].token, !audioOnly);

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

