const fs = require('fs')

const readFile = (archivo) => {
    const info = fs.readFileSync(archivo,'utf-8',
    (error, data) => {
        if(error){return error}
        if(data){return data}
    })
    return info
}

module.exports = {
    readFile
}