'use strict'
/* eslint-env node,  es6 */

//fonction readfile pour lire des fichiers nodejs
const { readFile } = require('fs')
//fonction promisify 'promesse' nodejs
const { promisify } = require('util')
//fonction intégrer dans la promesse, asynchrone
const readFileAsync = promisify(readFile)

const READ_OPTIONS = { encoding: 'utf-8' }
//récupérer le chemin de la page index.html
const INDEX_URL = 'C:/Users/difio/dev react/Blog_projet_react/images/index.html'

module.exports = async () => {


//Récup contenu fichier index.html
const contenu = await readFileAsync(INDEX_URL, READ_OPTIONS)



    //afficher page html
    return contenu
}
