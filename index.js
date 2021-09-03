const {escribirArchivo} = require('./moduloOne')


const fetch = require('node-fetch')
const url = "https://jsonplaceholder.typicode.com/users/1"

//const fs = require('fs')



fetch(url)
   .then(data=>data.json())
   .then(info=>{
      const data = JSON.stringify(info)
      escribirArchivo(data)
   }) 







