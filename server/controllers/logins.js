var login = function(req, res, db) {
  var username = req.body.username;
  var password = req.body.password;
  db.fetchOneHostByUsername(username, function(err, data) {
    if (err) {
      console.error(err);
      res.send(false);
      return;
    }
    if (data.PASSWORD === password) {
      req.session.regenerate(function() {
        req.session.userid = data.id;
        console.log('Session created. id: ' + req.session.userid);
        res.send(true);
      });
    } else {
      res.send(false);
    }
  });
};

module.exports.login = login;