'use strict'
/* eslint-env node,  es6 */

//Importer le paquet Express
const express = require('express')

const bodyParser = require('body-parser')
//Importer la bdd
const mysql = require('mysql')


//connecter à la bdd
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'user',
  database: 'blog_js'
});

connection.connect();


connection.end();


// CRUD
//app.get('/', (req, res) => {/*...*/})
// app.post('/quotes', (req, res) => {console.log(req.body)})

//choix du port
const PORT = 6300

// Créer une application express
const app = express()

//Importer page d'accueil
const pageAccueil = require('./pages/index-get.js')

//app qui écoute les requêtes de type GET , route -> '/')
app.get('/', async (req, res) => {
  const indexHtml = await pageAccueil()

  res.send(indexHtml)
})

// retourner le style
//retourner pour les images
app.use('/style', express.static('C:/Users/difio/dev react/Blog_projet_react/style'))
app.use('/images', express.static('C:/Users/difio/dev react/Blog_projet_react/images'))

//démarrer serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré : http://localhost:${PORT}`)

})


// var obj = {};
// app.get('/', function (req, res) {
//   connection.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected");
//     var sql = "SELECT * FROM articles";
//     connection.query(sql, function (err, result) {
//       if (err) {
//         throw err;
//       } else {
//         obj = { print: result };
//         res.render('index.html', {obj: obj});

//       }
//     });

//   });
// });