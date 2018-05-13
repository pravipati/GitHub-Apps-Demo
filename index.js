require('dotenv').config();
var createHandler = require('github-webhook-handler');
var createApp = require('github-app'); 
var http = require('http');
 
var app = createApp({
  id: process.env.APP_ID,
  cert: require('fs').readFileSync('pravipati-test-app.2018-05-12.private-key.pem')
});

var handler = createHandler({
  path: '/',
  secret: process.env.WEBHOOK_KEY
});

handler.on('issues', function(event) {
  console.log('Received an issue event for %s action=%s: #%d %s',
    event.payload.repository.name,
    event.payload.action,
    event.payload.issue.number,
    event.payload.issue.title)
  if (event.payload.action === 'opened') {
    var installation = event.payload.installation.id;

    app.asInstallation(installation).then(function (github) {
      github.issues.createComment({
        owner: event.payload.repository.owner.login,
        repo: event.payload.repository.name,
        number: event.payload.issue.number,
        body: 'Welcome to the robot uprising.'
      });
    });
  }
});

http.createServer(function(req, res) {
  handler(req, res, function (err) {
    res.statusCode = 404
    res.end('no such location')
    })
}).listen(7777);
