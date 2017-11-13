/**
 * script for initial db population
 */
import * as mongoose from 'mongoose';
import {Idea} from './model/idea';
import {Category} from './model/category';
const ideas = require('../config/ideas.json');
const categories = require('../config/categories.json');

const clearCollection = (collection: mongoose.Model<any>, clb: any) => {
    collection.remove({}, clb);
}

export const populateDB = (db: mongoose.Connection) => {
    clearCollection(Category, () => console.log.bind(console, 'Category collection cleared'));
    Category.create(categories, (err, categories) => {
        clearCollection(Idea, () => console.log.bind(console, 'Idea collection cleared'));
        Idea.create(ideas, (err, ideas) => {
            if(err) {
                return console.log(err);
            }
            console.log('db populated correctly');
        })
    })
    
}

