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
      res.send(true);
    } else {
      res.send(false);
    }
  });
};

module.exports.login = login;