var checkSessionExists = function(req, res, next) {
  if (req.session.userid) {
    next();
  } else {
    console.log('Access denied: session does not exist');
    //req.session.error = 'Access denied!';
    res.send({error: {msg: 'Access denied: session does not exist. Try logging in.'}});
  }
};

var checkSessionId = function(req, res, next) {
  if (req.session.userid === Number(req.params.hostId)) {
    next();
  } else {
    var errorMessage = 'Access denied: session id ' + req.session.userid + ' does not match parameter id ' + req.params.hostId;
    console.log(errorMessage);
    //req.session.error = 'Access denied!';
    res.send({error: {msg: errorMessage}});
  }
};

module.exports.checkSessionExists = checkSessionExists;
module.exports.checkSessionId = checkSessionId;