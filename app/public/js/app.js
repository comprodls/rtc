// replace these values with those generated in your TokBox Account
var apiKey = "45978912";
var sessionId = {
    room_1: "2_MX40NTk2NTk4Mn5-MTUwNzYxMjkzNTIwMX5FRU5nODB0YlRWRkNYYy8wekZKUk1PVnF-fg",
    room_2: "1_MX40NTk2NTk4Mn5-MTUwNzYxMjk3ODU0NH5zaUdjektzS0hWeG5lc1hDSmFKV3BQbTJ-fg",
    room_3: "1_MX40NTk2NTk4Mn5-MTUwNzYxMzAxNTQ0OH5jYmxNVnpodlR2TXh1WW9idHFjSzBVNTR-fg",
    room_4: "1_MX40NTk2NTk4Mn5-MTUwNzYxMzA0MjkxNn50c1lmWVlNWHpGTHoydnZPdTdpY2Fmelp-fg",
    room_5: "1_MX40NTk2NTk4Mn5-MTUwNzYxMzA5MDczNH5XSzA1djIydW54eEhVMmc0eXJ0U0E3dFh-fg",
    room_6: "1_MX40NTk3ODkxMn5-MTUwNzc4OTc1NjM0OX5kbzJUdkdpcUJtenVQVURWTnB4TDJheTB-fg"
};

var token = {
    room_1: "T1==cGFydG5lcl9pZD00NTk2NTk4MiZzaWc9ODI3Mjc0NGNjMjUxMGNlNmQ3MjYxMDE1N2Q1NTY2ODM5YzJhMjhkNzpzZXNzaW9uX2lkPTJfTVg0ME5UazJOVGs0TW41LU1UVXdOell4TWprek5USXdNWDVGUlU1bk9EQjBZbFJXUmtOWVl5OHdla1pLVWsxUFZuRi1mZyZjcmVhdGVfdGltZT0xNTA3NjEyOTQ2Jm5vbmNlPTAuMjM3Nzk4NTY1NzgzNjE0NTgmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUxMDIwNDk0NSZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==",
    room_2: "T1==cGFydG5lcl9pZD00NTk2NTk4MiZzaWc9MDk2YWE4MzhiOTY0YTg1NDNiZjhkYjhkN2E3ZDBjM2IyZDkzOTZhNjpzZXNzaW9uX2lkPTFfTVg0ME5UazJOVGs0TW41LU1UVXdOell4TWprM09EVTBOSDV6YVVkamVrdHpTMGhXZUc1bGMxaERTbUZLVjNCUWJUSi1mZyZjcmVhdGVfdGltZT0xNTA3NjEyOTg4Jm5vbmNlPTAuOTExNzM3ODcwNzEyNjEzNiZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTEwMjA0OTg3JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9",
    room_3: "T1==cGFydG5lcl9pZD00NTk2NTk4MiZzaWc9ZTM1OWY5YzQxZTM5YTRiNGY4OGI1ZjU5ZTc3Y2RhMDgyOGM5ZmY5YjpzZXNzaW9uX2lkPTFfTVg0ME5UazJOVGs0TW41LU1UVXdOell4TXpBeE5UUTBPSDVqWW14TlZucG9kbFIyVFhoMVdXOWlkSEZqU3pCVk5UUi1mZyZjcmVhdGVfdGltZT0xNTA3NjEzMDI0Jm5vbmNlPTAuNjA3MzY2Nzg0Nzk3MDk0OSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTEwMjA1MDIzJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9",
    room_4: "T1==cGFydG5lcl9pZD00NTk2NTk4MiZzaWc9MzRkOWJmZDM1MGEwMDZhNTFlMjUzM2U2NDJjZmE1Y2QxZTNjYzJlZTpzZXNzaW9uX2lkPTFfTVg0ME5UazJOVGs0TW41LU1UVXdOell4TXpBME1qa3hObjUwYzFsbVdWbE5XSHBHVEhveWRuWlBkVGRwWTJGbWVscC1mZyZjcmVhdGVfdGltZT0xNTA3NjEzMDQ5Jm5vbmNlPTAuNzQ4MjI4ODYwNTM1MTc0MSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTEwMjA1MDQ5JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9",
    room_5: "T1==cGFydG5lcl9pZD00NTk2NTk4MiZzaWc9MWUzZGE3NDk0ODAxMTMzNTdhM2Y2Mjc0NzU0NDEyNTMyOWY0MGZiZjpzZXNzaW9uX2lkPTFfTVg0ME5UazJOVGs0TW41LU1UVXdOell4TXpBNU1EY3pOSDVYU3pBMWRqSXlkVzU0ZUVoVk1tYzBlWEowVTBFM2RGaC1mZyZjcmVhdGVfdGltZT0xNTA3NjEzMDk3Jm5vbmNlPTAuOTQxOTE2MjQ4OTcyNTczMiZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTEwMjA1MDk2JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9",
    room_6: "T1==cGFydG5lcl9pZD00NTk3ODkxMiZzaWc9YWM3OWY5OTQ5MjY5MTJlZWU2ZGNkMTA2NGZiODk5OTI5MDU5ODJjMTpzZXNzaW9uX2lkPTFfTVg0ME5UazNPRGt4TW41LU1UVXdOemM0T1RjMU5qTTBPWDVrYnpKVWRrZHBjVUp0ZW5WUVZVUldUbkI0VERKaGVUQi1mZyZjcmVhdGVfdGltZT0xNTA3Nzg5NzY4Jm5vbmNlPTAuNjg3NzY1MTU1MzIxMDA3MyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTEwMzgxNzY2JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9"
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

            if(data.url === null) {
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

