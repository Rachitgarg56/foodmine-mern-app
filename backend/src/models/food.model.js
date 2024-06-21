import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    tags: {
        type: [String],
    },
    favourite: {
        type: Boolean,
        default: false,
    },
    stars: {
        type: Number,
        default: 3,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    origins: {
        type: [String],
        required: true,
    },
    cookTime: {
        type: String,
        required: true,
    },
    
}, 
{
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    },    
    timestamps: true,
}); 

const FoodModel = mongoose.model('food', FoodSchema);

export default FoodModel;
