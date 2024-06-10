const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema(
    {
        username: {
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

 const Collection = mongoose.model('Collection', collectionSchema);

 module.exports = Collection
