// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {


  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // sign up route loads signup.html
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });
  

  app.get("/signup-failure", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup-failure.html"));
  });

  app.get("/signin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signin.html"));
  });

  app.get("/signin-failure", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signin-failure.html"));
  });
};