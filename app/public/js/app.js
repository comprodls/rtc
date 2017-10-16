// replace these values with those generated in your TokBox Account
var apiKey = "45979002";
var sessionId = {
    room_1: "2_MX40NTk3OTAwMn5-MTUwNzg5MTYyNDM0M35pbWVkM3Uzc2YrYmVndlFWUGlLd2JOdzJ-fg",
    room_2: "1_MX40NTk2NTk4Mn5-MTUwNzYxMjk3ODU0NH5zaUdjektzS0hWeG5lc1hDSmFKV3BQbTJ-fg",
    room_3: "1_MX40NTk2NTk4Mn5-MTUwNzYxMzAxNTQ0OH5jYmxNVnpodlR2TXh1WW9idHFjSzBVNTR-fg",
    room_4: "1_MX40NTk3OTAwMn5-MTUwNzc5MzkzMTU2M35KdTFYc2NMNSthMlZYZW5JUzhwMXFwMVZ-fg",
    room_5: "2_MX40NTk3OTAwMn5-MTUwNzg3MzcyMDg2OX5pK0swbkpET2RwVW40TmQ4bGxMM2tjMkt-fg",
    room_6: "1_MX40NTk3ODkxMn5-MTUwNzgwNzM4Mjc3MX4yTDVaVDRqOFVIOU5tMHlPcXphRzl0Ui9-fg"
};

var token = {
    room_1: "T1==cGFydG5lcl9pZD00NTk3OTAwMiZzaWc9ZDI4YWYyY2M2MGU1MTVhMjdjZGQxYWQ5N2E4YzljOGM3MTk2ZjMyNjpzZXNzaW9uX2lkPTJfTVg0ME5UazNPVEF3TW41LU1UVXdOemc1TVRZeU5ETTBNMzVwYldWa00zVXpjMllyWW1WbmRsRldVR2xMZDJKT2R6Si1mZyZjcmVhdGVfdGltZT0xNTA3ODkxNjMwJm5vbmNlPTAuNjIxNjkwMTQxMjMzNDQ1MiZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTA3ODk1MjI5JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9",
    room_2: "T1==cGFydG5lcl9pZD00NTk2NTk4MiZzaWc9MDk2YWE4MzhiOTY0YTg1NDNiZjhkYjhkN2E3ZDBjM2IyZDkzOTZhNjpzZXNzaW9uX2lkPTFfTVg0ME5UazJOVGs0TW41LU1UVXdOell4TWprM09EVTBOSDV6YVVkamVrdHpTMGhXZUc1bGMxaERTbUZLVjNCUWJUSi1mZyZjcmVhdGVfdGltZT0xNTA3NjEyOTg4Jm5vbmNlPTAuOTExNzM3ODcwNzEyNjEzNiZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTEwMjA0OTg3JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9",
    room_3: "T1==cGFydG5lcl9pZD00NTk2NTk4MiZzaWc9ZTM1OWY5YzQxZTM5YTRiNGY4OGI1ZjU5ZTc3Y2RhMDgyOGM5ZmY5YjpzZXNzaW9uX2lkPTFfTVg0ME5UazJOVGs0TW41LU1UVXdOell4TXpBeE5UUTBPSDVqWW14TlZucG9kbFIyVFhoMVdXOWlkSEZqU3pCVk5UUi1mZyZjcmVhdGVfdGltZT0xNTA3NjEzMDI0Jm5vbmNlPTAuNjA3MzY2Nzg0Nzk3MDk0OSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTEwMjA1MDIzJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9",
    room_4: "T1==cGFydG5lcl9pZD00NTk3OTAwMiZzaWc9ZjQzYWJlMWExMjAzNDk5OTlmM2UwZmE0NDU5ZDFmMDM5NTY5MTg2MjpzZXNzaW9uX2lkPTFfTVg0ME5UazNPVEF3TW41LU1UVXdOemM1TXprek1UVTJNMzVLZFRGWWMyTk1OU3RoTWxaWVpXNUpVemh3TVhGd01WWi1mZyZjcmVhdGVfdGltZT0xNTA3NzkzOTQxJm5vbmNlPTAuMjU1MjM2MjgzMDMxODk4NiZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTEwMzg1OTQwJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9",
    room_5: "T1==cGFydG5lcl9pZD00NTk3OTAwMiZzaWc9NDVjM2VhODk5ZWRhYmE5ZGI5OWE1MjkzYmNhMTNhYTYyMmZlMDM3NzpzZXNzaW9uX2lkPTJfTVg0ME5UazNPVEF3TW41LU1UVXdOemczTXpjeU1EZzJPWDVwSzBzd2JrcEVUMlJ3Vlc0MFRtUTRiR3hNTTJ0ak1rdC1mZyZjcmVhdGVfdGltZT0xNTA3ODczNzQ3Jm5vbmNlPTAuOTg3MTYyNDkwNjIwNTM0MyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTEwNDY1NzQ2JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9",
    room_6: "T1==cGFydG5lcl9pZD00NTk3ODkxMiZzaWc9MmI2YWYyNWE3ZTFhOGQ1ODc0YzUwMGFjYzQ3NWVmODM0YjAzMDU1YTpzZXNzaW9uX2lkPTFfTVg0ME5UazNPRGt4TW41LU1UVXdOemd3TnpNNE1qYzNNWDR5VERWYVZEUnFPRlZJT1U1dE1IbFBjWHBoUnpsMFVpOS1mZyZjcmVhdGVfdGltZT0xNTA3ODA3NDEwJm5vbmNlPTAuNDc2MzgzOTc1ODE4MDY1NyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTEwMzk5NDA5JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9"
};

var archiveId = "";
var recordingURL = "", session, subscriber, debugInfo = {}, dropdown;

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


function initializeSession(apiKey, sessionId, token) {
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
      }
    });
  });

  // Create a publisher
  var publisher = OT.initPublisher("publisher", {
    insertMode: "append",
    width: "100%",
    height: "100%"
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
    dropdown = $("#chat_rooms").val();

    // Call to initialise session
    initializeSession(apiKey, sessionId[dropdown], token[dropdown]);

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
        "url": "/api/recording/start?sessionId=" + sessionId[dropdown],
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
        "url": "/api/recording/stop?archiveId=" + archiveId,
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
        "url": "/api/recording/details?archiveId=" + archiveId,
        "dataType": "json",
        "contentType": "application/json",
        "success": function (data) {
            console.log(data);

            if(data.status !== "uploaded") {
               $("#modal-text").text("Error: Recording is not available yet. Please try again after a few seconds.");
            } else {
              var str = data.url.substring(0, 50);
              $("#modal-text").html("Here is the recording. URL : <a href=\"" + data.url +
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

