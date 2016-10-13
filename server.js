const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/static'));
app.use('/assets', express.static(__dirname + '/client/assets'));

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'static', 'index.html'));
});

app.listen(port, function () {
  console.log('Server start on port ' + port);
});