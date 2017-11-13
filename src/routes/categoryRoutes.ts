import * as express from 'express';
import {Category} from '../storage/model/category';
import * as mongoose from 'mongoose';
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    Category.find({}, (err: mongoose.Error, categories: any) => {
        if(err){
            return next(err);
        }
        res.status(200).json(categories);
    })
})


module.exports = router;