// replace these values with those generated in your TokBox Account
var apiKey = "45965982";
var sessionId = "2_MX40NTk2NTk4Mn5-MTUwNjM0NzQ1OTUzNX5PdTE4SzZWR2FuMmVWeFBPRGcwcS9JZEV-fg";
var token = "T1==cGFydG5lcl9pZD00NTk2NTk4MiZzaWc9MzBlNmFhMmY1YjU4Y2UxODdmOGU5NmE4MTNlMDQ5NzBjZTMwYWVlMDpzZXNzaW9uX2lkPTJfTVg0ME5UazJOVGs0TW41LU1UVXdOak0wTnpRMU9UVXpOWDVQZFRFNFN6WldSMkZ1TW1WV2VGQlBSR2N3Y1M5SlpFVi1mZyZjcmVhdGVfdGltZT0xNTA2MzQ3NDgzJm5vbmNlPTAuODMwODcwNTQwMzA5ODI3NSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTA4OTM5NDg2JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";
var archiveId = "";
var recordingURL = "";

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

// (optional) add server code here
initializeSession();

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
  session.on('streamCreated', function(event) {
    session.subscribe(event.stream, 'subscriber', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
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



$("#start-recording").click(function (e) {
    e.preventDefault();

    $.ajax({
        "type": "GET",
        "url": "/api/recording/start?sessionId=" + sessionId,
        "dataType": "json",
        "contentType": "application/json",
        "success": function (data) {
            console.log(data);
            alert(JSON.stringify(data));
            archiveId = data.id;
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
        },
        "error": function(data) {
            console.log(data);
            alert(JSON.stringify(data));
        }
    });

});

$("#details-recording").click(function (e) {
    e.preventDefault();

    $.ajax({
        "type": "GET",
        "url": "/api/recording/details?archiveId=" + archiveId,
        "dataType": "json",
        "contentType": "application/json",
        "success": function (data) {
            console.log(data);
            alert(JSON.stringify(data));

            if(data.url === null) {
               alert("click on the get-recoding-button again, as server is still saving the recording");
            } else {
               recordingURL = data.url;
            }
        },
        "error": function(data) {
            console.log(data);
            alert(JSON.stringify(data));
        }
    });

});


$("#play-recording").click(function (e) {
   if(recordingURL === "") {
       alert("click on the get-recoding-button again, as server is still saving the recording");
   } else {
        window.open(recordingURL, '_blank');
   }

});
