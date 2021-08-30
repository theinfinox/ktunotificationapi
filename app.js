const express = require('express')
const app = express()
const port =(process.env.PORT || 8080);
const scrapper = require('./scrapper');
const fs = require('fs');
const dataPath = 'notifications.json';


scrapper.fetch()

setInterval(() => {
  scrapper.fetch()
}, 300000);



app.get('/', (req, res) => {
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));
  });
});



app.listen(3000, '0.0.0.0');
