/*interface IHomer {
    name(): String;
}


class Homer implements IHomer {
    name(){
        return 'Homer Simpson';
    }
}

const instance = new Homer();
console.log(instance.name());

console.log('ciaoooo');
let a = {b: 4, c: 7};
let cc = {...a};
console.log(cc); //testing ES6 spread operator
*/
/*
import * as express from 'express'; 

const app = express();

app.listen(9002, () => {
    console.log('server listening');
}) 


app.get('/', (req, res) => res.send('hello world'))

*/

//const Server = require('./server');
import Server from './server';
import {config} from './config';
console.log(config);
let server = Server.getInstance();
server.use(require('./routes/locationRoute'));
server.listen();

