'use strict'
const minimist = require('minimist');

module.exports = () => {
    const args = minimist(process.argv.slice(2));
    const cmd = args._[0];
    
    switch (cmd) {
        case 'generate':
            console.log('generate was called');

        case 'g':
            console.log('generate was called as well');

        default:
            console.log(`${cmd} is not a valid command`);
    }
}