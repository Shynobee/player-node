var songs = require('./js/songs'),
  fs = require('fs'),
  http = require('http'),
  router = require('http-router'),
  routes = router.createRouter(),  // or routes = new router; 
  express = require('express');

app = express(),
  port = process.env.PORT || 4000;

app.use(express.static('./'));

app.get('/getSongName', (req, res) => {
  songs.getRandomSong(name => {
    return res.status(200).send(name).end();
  })
});

app.post('/getSongFile', (req, res) => {
  let name = '';

  req.on('data', function(chunk) {
    name += chunk;
  });

  return req.on('end', function() {
    res.set({ 'Content-Type': 'audio/mpeg' });

    let data = fs.createReadStream(__dirname + '/music/' + name)
    return data.pipe(res)
  });
});

app.listen(port);