// replace these values with those generated in your TokBox Account
var apiKey = "45965982";
var sessionId = {
    room_1: "1_MX40NTk2NTk4Mn5-MTUwNzU2MDkyMjgyNH5DR3JOZWtoWkIzR2lDU01DMWsyTVJDaHZ-fg",
    room_2: "1_MX40NTk2NTk4Mn5-MTUwNzU1NjI3ODAzMn5Xd0FMTG43d3lDS21IZVBwMmowbm5vMjV-fg",
    room_3: "2_MX40NTk2NTk4Mn5-MTUwNzU1NjM1MzYwNX45ZkhpUC9ySXRKVFFrbUpoVEtPV2czZkV-fg",
    room_4: "1_MX40NTk2NTk4Mn5-MTUwNzU1NjM5NTg1NH5LNXphcnBjYmdPelZCM1c0ZTl3UFR3QXl-fg",
    room_5: "1_MX40NTk2NTk4Mn5-MTUwNzU1NjQxMjk0N344R3YrL1o1VDdZelB6MXNpQ2M2Rk1oaFJ-fg"
};

var token = {
    room_1: "T1==cGFydG5lcl9pZD00NTk2NTk4MiZzaWc9ZDIzNjg0MmQwOGFhZTZjYjBlMWQ3MzgzYTg0N2E3ZTVmYjUyZjhlMDpzZXNzaW9uX2lkPTFfTVg0ME5UazJOVGs0TW41LU1UVXdOelUyTURreU1qZ3lOSDVEUjNKT1pXdG9Xa0l6UjJsRFUwMURNV3N5VFZKRGFIWi1mZyZjcmVhdGVfdGltZT0xNTA3NTYwOTI4Jm5vbmNlPTAuMjgxNTk2OTE3MTIyOTkyNiZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTA3NTY0NTI4JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9",
    room_2: "T1==cGFydG5lcl9pZD00NTk2NTk4MiZzaWc9YjYyYWFiMzkxOTQzMmRjYTVjNDNjNDg4MjU1MmViNWEzMjRjNzhjYzpzZXNzaW9uX2lkPTJfTVg0ME5UazJOVGs0TW41LU1UVXdOelUxTmpFNU5EVTROWDVFZVhrcmFHSnViUzlMUVVWQmJHRnZSMlJCZVRBM2JYUi1mZyZjcmVhdGVfdGltZT0xNTA3NTU2MjY0Jm5vbmNlPTAuMjY0MjkyMDA1MTE2MDM0NDYmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUwNzU1OTg2NCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==",
    room_3: "T1==cGFydG5lcl9pZD00NTk2NTk4MiZzaWc9MDgyMDEzMTg1YTVjNmQzMjZmZTIyYjE4YjU5ZTg3YTE3YzNlYzViMDpzZXNzaW9uX2lkPTJfTVg0ME5UazJOVGs0TW41LU1UVXdOelUxTmpNMU16WXdOWDQ1WmtocFVDOXlTWFJLVkZGcmJVcG9WRXRQVjJjelprVi1mZyZjcmVhdGVfdGltZT0xNTA3NTU2Mzg0Jm5vbmNlPTAuMTg4OTUzNTgwNTg5MjU1MDQmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUwNzU1OTk4MyZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==",
    room_4: "T1==cGFydG5lcl9pZD00NTk2NTk4MiZzaWc9NzUyYzVjMjM5ZTk0YmFhZGQ0NzI4ZjJhMzZhZjMzZjNhZjBjNDI4NDpzZXNzaW9uX2lkPTFfTVg0ME5UazJOVGs0TW41LU1UVXdOelUxTmpNNU5UZzFOSDVMTlhwaGNuQmpZbWRQZWxaQ00xYzBaVGwzVUZSM1FYbC1mZyZjcmVhdGVfdGltZT0xNTA3NTU2NDAwJm5vbmNlPTAuMDE1NzY4MjAwNTI2NzE5Njc4JnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE1MDc1NjAwMDAmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=",
    room_5: "T1==cGFydG5lcl9pZD00NTk2NTk4MiZzaWc9ZTdlNTJjYmViYmEwYzQ2NGYxNDBmYjBiMDE1YzRmNGMwMTBhZmY1MTpzZXNzaW9uX2lkPTFfTVg0ME5UazJOVGs0TW41LU1UVXdOelUxTmpReE1qazBOMzQ0UjNZckwxbzFWRGRaZWxCNk1YTnBRMk0yUmsxb2FGSi1mZyZjcmVhdGVfdGltZT0xNTA3NTU2NDE3Jm5vbmNlPTAuNTE2MjI2NjUwNjQwMTE2NyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTA3NTYwMDE2JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9"
};

var archiveId = "";
var recordingURL = "", session, subscriber, debugInfo = {}, dropdown;

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    resetUI();
    alert(error.message);
  }
}

function resetUI() {
    $("#start-recording").show();
    $("#stop-recording").hide();
    $("#play-recording").hide();
    $("#connect").show();
    $("#disconnect").hide();
    $("#start-recording").prop("disabled", true);
}


function initializeSession(apiKey, sessionId, token) {
  session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
  session.on("streamCreated", function(event) {
    subscriber = session.subscribe(event.stream, "subscriber", {
      insertMode: "append",
      width: "100%",
      height: "100%"
    }, handleError);
    console.log('event');
    console.log(event);
    debugInfo["ice-servers"] = event.target.sessionInfo.iceServers;
    debugInfo["priority-video-codec"] = event.target.sessionInfo.priorityVideoCodec;
    debugInfo["media-server-name"] = event.target.sessionInfo.mediaServerName;
    subscriber.getStats(function(err, data) {
      if(!err) { debugInfo.stats = data; }
    });
    debugInfo["destroyed-reason"] = event.stream.destroyedReason;
    debugInfo["has-audio"] = event.stream.hasAudio;
    debugInfo["has-video"] = event.stream.hasVideo;

    var a = JSON.stringify(debugInfo, 0, 4);
    $("#debug-body").html("<pre style='height: 100%'>" + a + "</pre>");
  });

  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
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

    // (optional) add server code here
    initializeSession(apiKey, sessionId[dropdown], token[dropdown]);

  console.log(sessionId[dropdown]);
  console.log(token[dropdown]);

    $("#connect").hide();
    $("#disconnect").show();
    $("#start-recording").prop("disabled", false);
  } else {
    alert("Session Already Created.")
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
      alert("session not yet started!");
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
            alert(JSON.stringify(data));
            archiveId = data.id;
            $("#start-recording").hide();
            $("#stop-recording").show();
        },
        "error": function(data) {
            console.log(data);
            alert(JSON.stringify(data));
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
            alert(JSON.stringify(data));
            $("#stop-recording").hide();
            $("#play-recording").show();

        },
        "error": function(data) {
            console.log(data);
            alert(JSON.stringify(data));
        }
    });

});

$("#play-recording").click(function (e) {
    e.preventDefault();

    $.ajax({
        "type": "GET",
        "url": "/api/recording/details?archiveId=" + archiveId,
        "dataType": "json",
        "contentType": "application/json",
        "success": function (data) {
            console.log(data);

            if(data.url === null) {
               alert("click on the play-recoding-button again, as server is still saving the recording");
            } else {
                recordingURL = data.url;
                window.open(recordingURL, '_blank');
                $("#start-recording").show();
                $("#play-recording").hide();
            }
        },
        "error": function(data) {
            console.log(data);
            alert(JSON.stringify(data));
        }
    });

});

$("#debug").click(function(e) {
    e.preventDefault();

    if(subscriber) {
        console.log('here');
        subscriber.getStats(function(err, data) {
            if(err) {
                alert("Error getting Debug Info.");
            } else {
                console.log("getStats() data");
                console.log(data);


            }
        });
    } else {
        alert("Session not yet subscribed!");
    }
});
