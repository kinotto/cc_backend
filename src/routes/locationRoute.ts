import * as express from 'express';
import ILocation from '../model/ILocation';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    //res.status(200).send('ciaone');
    res.json({pippo: 'ciao'})
})

router.post('/:id', (req: express.Request, res: express.Response) => {

})


router.delete('/:id', (req: express.Request, res: express.Response) => {
    
})

//c
module.exports = router;