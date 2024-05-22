import mongoose from 'mongoose';

const collectionSchema = new mongoose.Schema(
    {
        name: {
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

export const Collection = mongoose.model('Collection', collectionSchema);