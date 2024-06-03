<<<<<<< HEAD
const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema(
    {
        username: {
=======
import mongoose from 'mongoose';

const collectionSchema = new mongoose.Schema(
    {
        name: {
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    }, {
    timestamps: true
}
);

<<<<<<< HEAD
 const Collection = mongoose.model('Collection', collectionSchema);

 module.exports = Collection
=======
export const Collection = mongoose.model('Collection', collectionSchema);
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17
