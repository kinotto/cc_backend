import * as express from 'express';
import {Idea} from '../storage/model/idea';
import * as mongoose from 'mongoose';
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    Idea.find({}, (err: mongoose.Error, ideas: any) => {
        if(err){
            return next(err);
        }
        res.status(200).json(ideas);
    })
})

module.exports = router;