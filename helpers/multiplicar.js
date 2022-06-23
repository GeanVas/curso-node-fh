const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = (base = 5, listar = false, top) => {
    
    let out = '';
    
    for (let i = 1; i <= top; i++) {
        out += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
    }
    
    if(listar) {
        console.log('================='.rainbow);
        console.log('   Tabla del:', base);
        console.log('================='.rainbow);
        console.log(out);
    }
    
    fs.writeFileSync(`./salida/tabla-${base}.txt`, out)
    console.log(`tabla-${base}.txt creado`);
}

module.exports = {
    crearArchivo: crearArchivoTabla
}