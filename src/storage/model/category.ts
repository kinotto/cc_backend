import * as mongoose from 'mongoose';
const categorySchema = new mongoose.Schema({
    categoryCode: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
    
})
export const Category = mongoose.model('Category', categorySchema);
