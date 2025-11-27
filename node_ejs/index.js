const express = require('express');
let ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

// app.set()

app.get('/movie', (req, res) => {
  res.render('movie', {
        title: "Inception",
        releaseYear: 2010,
        rating: 8.8,
        actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
    });
});

app.listen(3008, () => {
    console.log("Server started on port: 3008")
})