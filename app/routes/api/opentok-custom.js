var OpenTok = require("opentok");

var credentialMap = {
    // dlsadmin -> safari project
    45979002: {
        secret: "cba8b72f6b5f8320c7e517f29fab5a102ecd49d4"
    },
    // dlsadmin -> regular project
    45965982: {
        secret: "ff63248cb665f7c05779280596fe3dc0a5ac63d4"
    }
};

var getOpentokHandle = function(apiKey) {
    console.log("Inside getOpentokHandle function");

    if(!credentialMap[apiKey].openTokHandle) {
        console.log("Creating new openTokHandler for api key = " + apiKey);
        credentialMap[apiKey].openTokHandle = new OpenTok(apiKey, credentialMap[apiKey].secret);
    } else {
        console.log("Using existing openTokHandler for api key = " + apiKey);
    }
    return credentialMap[apiKey].openTokHandle;
};

exports.getOpentokHandle = getOpentokHandle;
