/**
 * VHL AUTH Endpoint STUB
 *
 * Basic version of the Authentication Endpoint STUB. It takes a valid "username"
 * as input (pre-defined hashmap lookup) and returns stubbed responses. Also authorizes
 * permissions to PubNub based user's roster
 *
 * POST
 *
 * REQUEST PARAMs:
 * 1. name : String (example "zelda")
 *
 * RESPONSE:
 * {
 *    "user": {
 *      "uuid": "101010101010101",
 *      "name": "Zelda"
 *    },
 *    "roster" {
 *      "groups" : []
 *    },
 *    "authToken": 6955170399,
 *    "provider": "pubnub",
 *    "pubnub" : {
 *      "publish_key": "pub-c-6af341a2-b7ae-44aa-82f9-48c0d5a195af",
 *      "subscribe_key": "sub-c-cc082852-1f67-11e7-b284-02ee2ddab7fe"
 *    }
 * }
 */


//Setup a pre-defined User Map
var _usersDictionary = {
    101: {
        "user": {
            "uuid": "101",
            "first_name": "Zelda",
            "last_name": "Williams"
        },
        "roster": {
            "groups": [{
                "id": "course_1",
                "name": "Course 1",
                "sections": [{
                    "id": "course_1_section_1",
                    "name": "Section 1"
                }]
            },{
                "id": "course_2",
                "name": "Course 2",
                "sections": [{
                    "id": "course_2_section_1",
                    "name": "Section 1"
                }]
            }]
        },
        "auth_token": "Zelda-authkey"
    },
    102: {
        "user": {
            "uuid": "102",
            "first_name": "Albert",
            "last_name": "Smith"
        },
        "roster": {
            "groups": [{
                "id": "course_2",
                "name": "Course 2",
                "sections": [{
                    "id": "course_2_section_1",
                    "name": "Section 1"
                }]
            },{
                "id": "course_3",
                "name": "Course 3",
                "sections": [{
                    "id": "course_3_section_1",
                    "name": "Section 1"
                }]
            }]
        },
        "auth_token": "Albert-authkey"
    },
    103: {
        "user": {
            "uuid": "103",
            "first_name": "Dirt",
            "last_name": "Driver"
        },
        "roster": {
            "groups": [{
                "id": "course_1",
                "name": "Course 1",
                "sections": [{
                    "id": "course_1_section_1",
                    "name": "Section 1"
                }]
            },{
                "id": "course_3",
                "name": "Course 3",
                "sections": [{
                    "id": "course_3_section_1",
                    "name": "Section 1"
                }]
            }]
        },
        "auth_token": "Dirt-Driver-authkey"
    },
    104: {
        "user": {
            "uuid": "104",
            "first_name": "Liam",
            "last_name": "Olivia"
        },
        "roster": {
            "groups": [{
                "id": "course_1",
                "name": "Course 1",
                "sections": [{
                    "id": "course_1_section_1",
                    "name": "Section 1"
                }]
            },{
                "id": "course_2",
                "name": "Course 2",
                "sections": [{
                    "id": "course_2_section_1",
                    "name": "Section 1"
                }]
            }]
        },
        "auth_token": "Liam-authkey"
    },
    105: {
        "user": {
            "uuid": "105",
            "first_name": "James",
            "last_name": "Isabella"
        },
        "roster": {
            "groups": [{
                "id": "course_1",
                "name": "Course 1",
                "sections": [{
                    "id": "course_1_section_1",
                    "name": "Section 1"
                }]
            },{
                "id": "course_2",
                "name": "Course 2",
                "sections": [{
                    "id": "course_2_section_1",
                    "name": "Section 1"
                }]
            }]
        },
        "auth_token": "James-authkey"
    },
    106: {
        "user": {
            "uuid": "106",
            "first_name": "Sophia",
            "last_name": "Watson"
        },
        "roster": {
            "groups": [{
                "id": "course_1",
                "name": "Course 1",
                "sections": [{
                    "id": "course_1_section_1",
                    "name": "Section 1"
                }]
            },{
                "id": "course_2",
                "name": "Course 2",
                "sections": [{
                    "id": "course_2_section_1",
                    "name": "Section 1"
                }]
            }]
        },
        "auth_token": "Sophia-authkey"
    }
};



/**
 * Temp keys for dev test only.
 */
//var pubnubCredentials = {
//    "publish_key": "pub-c-6783ca6f-964d-4bca-b9ac-d7528be1e353",
//    "subscribe_key": "sub-c-949b8e8e-240a-11e7-b284-02ee2ddab7fe",
//    "secret_key": "sec-c-NDY0NDAwYzktMjNkNS00NDIzLTg1Y2ItYmI3MjExZjliMzU5"
//};

exports.getAuthToken = function (req, res, next) {

   res.status(401).send({message: "User not found, uuid - "});

};
