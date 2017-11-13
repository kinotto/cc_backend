import {expect} from 'chai';
import {} from "mocha";
import {Idea} from '../storage/model/idea';
import {Category} from '../storage/model/category';
import Mongo from '../storage/mongo';
import * as mongoose from 'mongoose';

describe('test on mock data', () => {

    beforeEach((done) => {
        let connection = Mongo.connect();
        connection.once('open', () => done());
    })

    it('should return some some ideas', (done) => {
        Idea.find({}, (err, resp) => {
            if(err){
                done(err);
            }
            done();
        })
    })

    it('should return some some categories', (done) => {
        Category.find({}, (err, resp) => {
            if(err){
                done(err);
            }
            done();
        })
    })

    afterEach(() => {
        mongoose.disconnect();
    })
})