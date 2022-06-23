const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.b, argv.l, argv.t);