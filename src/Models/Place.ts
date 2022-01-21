import { Schema, model } from 'mongoose';

const PlaceSchema = new Schema({
    name: {
        type: String,
        required: true
    }
},{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

export default model('Places', PlaceSchema);