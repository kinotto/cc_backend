import Server from './server';
import Mongo from './storage/mongo';
import {config} from './config';
import * as express from 'express';


let server = Server.getInstance();
Mongo.connect();
Mongo.populate();

server.use(require('./routes/locationRoute'));



//generic error handler
server.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(500).json(err);
}) 
server.listen();

