const fs = require('fs');

const getRandomSong = (cb) => {
    return fs.readdir(__dirname + '/../music/', (err, data) => {
        if (err) throw err;
        //console.log(data);
       return cb(data[Math.floor(Math.random() * data.length)]);
    });
}

const readRandomSong = (name, cb) => {
    fs.readFile(__dirname + '/../music/' + name, (err, data) => {
        if (err) throw err;
        return cb(data);
    });
}

module.exports = {readRandomSong, getRandomSong}
