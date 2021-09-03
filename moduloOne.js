const fs = require('fs')
const process = require('process')

const escribirArchivo = (data) => {
   fs.writeFile('./data.md', data , (error) => {
      if(error){ throw error}
   })
   fs.writeFile('./data.txt', data , (error) => {
      if(error){ throw error}
   })
   console.log('archivo modificado');
   console.log(process.memoryUsage());
}

module.exports = {
   escribirArchivo
}