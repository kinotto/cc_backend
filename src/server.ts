import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';

export default class Server {
    app: express.Application;
    static instance: Server;
    private constructor(){
        this.app = express();
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
    }

    /**
     * @returns an instance of server
     */
    public static getInstance(){
        if(!Server.instance){
            Server.instance = new Server();
        }
        return Server.instance;
    }
    public use(middleware: express.RequestHandler){
        this.app.use(middleware);
    }
    public listen(){
        this.app.listen(9002, (req: express.Request, res: express.Response) => console.log('server listening'));
    }
}