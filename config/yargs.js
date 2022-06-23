const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false
                })
                .option('t', {
                    alias: 'top',
                    type: 'number',
                    demandOption: true
                })
                .check( (argv, options) => {
                    if (isNaN(argv.b)) {
                        throw 'La base no es un numero'
                    }
                    return true;
                })
                .argv;

module.exports = argv;