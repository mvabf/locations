import { Schema, model } from 'mongoose';

const PlaceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    }
});

export default model('Places', PlaceSchema);