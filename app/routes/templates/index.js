
/*
 * GET home page.
 */

//get correct directory path
var filePath = __dirname.split('routes')[0] + '/views/';

exports.index = function(req, res, next) {
    if(req.path === '/') {
        res.sendFile(filePath + 'index.html');
    } else {
        next();
    }
};
