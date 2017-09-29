var publishKey = 'pub-c-6783ca6f-964d-4bca-b9ac-d7528be1e353',
    subscribeKey = 'sub-c-949b8e8e-240a-11e7-b284-02ee2ddab7fe';
var opentokAPIKey = "45969392";

var me_role;
var isSignalingSetup = false, pubnubClient;
var uuid = 'Prerak-101' + Math.floor(100000 + Math.random() * 900000);
var activeSessionId, currentRecordingID;
var session;
$(document).ready(function () {
    $.ajax({
        type: "POST",
        url: '/grant',
        data: JSON.stringify({}),
        dataType: "json",
        contentType: "application/json",
        success: function (grantApiResponse) {
            pubnubClient = new PubNub({
                publishKey: publishKey,
                subscribeKey: subscribeKey,
                authKey: grantApiResponse.authKey,
                uuid: uuid
            });

            pubnubClient.addListener({
                message: function(evt) {
                    var message = evt.message;
                    if(message.sender !== uuid) {
                        var sessionId = message.sessionData.id;
                        var token = message.sessionData.token;
                        session = OT.initSession(opentokAPIKey, sessionId);
                        activeSessionId = sessionId;
                        session.on('streamCreated', function(event) {
                            console.log('streamCreated');
                            console.log(event);
                            session.subscribe(event.stream, 'remoteVideo', {
                                insertMode: 'append',
                                width: '100%',
                                height: '100%'
                            }, function(a, b) {
                                console.log('subscribe callback');
                                console.log(a);
                                console.log(b);
                            });
                        });

                        // Create a publisher
                        var publisher = OT.initPublisher('ownVideo', {
                            insertMode: 'append',
                            width: '100%',
                            height: '100%'
                        }, function(a, b) {
                            console.log('initPublisher callback');
                            console.log(a);
                            console.log(b);
                        });

                        session.connect(token, function(error) {
                            if (error) {
                                console.log(error.message);
                            } else {
                                session.publish(publisher, function(a, b) {
                                    console.log('publish callback');
                                    console.log(a);
                                    console.log(b);
                                });
                            }
                        });
                    }
                },
                presence: function(event) {
                    var newUser = '<li><a class="invite">' + event.uuid + '</a></li>';
                    $("#onlineUsers").append(newUser);
                },
                status: function(statusData) {
                    if(statusData.category === 'PNConnectedCategory' && !isSignalingSetup) {
                        isSignalingSetup = true;
                    }
                }
            });

            pubnubClient.subscribe({
                channels: ['compro_webrtc'],
                withPresence: true
            });
        },
        error: function (grantApiError) {
            console.log(grantApiError);
        }
    });
});

$('#startRecording').click(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: '/archives/start',
        data: JSON.stringify({
            sessionId: activeSessionId
        }),
        dataType: "json",
        contentType: "application/json",
        success: function (recordingMeta) {
            console.log(recordingMeta);
            /*currentRecordingID = recordingMeta.archiveId;
            alert('Recording started');*/
            currentRecordingID = recordingMeta.id;
        },
        error: function (grantApiError) {
            console.log(grantApiError);
        }
    });
});

$('#stopRecording').click(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: '/archives/' + currentRecordingID + '/stop',
        data: JSON.stringify({}),
        dataType: "json",
        contentType: "application/json",
        success: function (recordingMeta) {
            console.log(recordingMeta);
            /*currentRecordingID = recordingMeta.archiveId;
            alert('Recording started');*/
        },
        error: function (error) {
            console.log(error);
        }
    });
});

$('#refreshRecordingList').click(function(e) {
    e.preventDefault();
    $.ajax({
        type: "GET",
        url: '/recordings',
        dataType: "json",
        contentType: "application/json",
        success: function (recordings) {
        },
        error: function (error) {
            console.log(error);
        }
    });
});

$('#playRecordings').click(function(e) {
    e.preventDefault();
});

$("#disconnectButton").click(function(e) {
    e.preventDefault();
    if(pubnubClient) {
        session.disconnect();
        pubnubClient.unsubscribeAll();
        alert('Disconnected');
    }
});

$("#onlineUsers").on("click", ".invite", function() {
    me_role = 'inviting';
    setup();
});

function setup() {
    $.ajax({
        type: "POST",
        url: '/sessions',
        data: JSON.stringify({}),
        dataType: "json",
        contentType: "application/json",
        success: function (sessionData) {
            var sessionId = sessionData.id;
            activeSessionId = sessionId;
            var token = sessionData.token;
            session = OT.initSession(opentokAPIKey, sessionId);
            // Subscribe to a newly created stream
            session.on('streamCreated', function(event) {
                console.log('streamCreated');
                console.log(event);
                session.subscribe(event.stream, 'remoteVideo', {
                    insertMode: 'append',
                    width: '100%',
                    height: '100%'
                }, function(a, b) {
                    console.log('subscribe callback');
                    console.log(a);
                    console.log(b);
                });
            });

            // Create a publisher
            var publisher = OT.initPublisher('ownVideo', {
                insertMode: 'append',
                width: '100%',
                height: '100%'
            }, function(a, b) {
                console.log('initPublisher callback');
                console.log(a);
                console.log(b);
            });

            session.connect(token, function(error) {
                if (error) {
                    console.log(error.message);
                } else {
                    pubnubClient.publish({
                        "message": { "sessionData": sessionData, "sender": uuid },
                        "channel": "compro_webrtc"
                    }, function() {});

                    session.publish(publisher, function(a, b) {
                        console.log('publish callback');
                        console.log(a);
                        console.log(b);
                    });
                }
            });
        },
        error: function (sessionApiError) {
            console.log(sessionApiError);
        }
    });
}
