import mongoose from "mongoose";

const Item = new mongoose.Schema({

    id: {type: Number, required: true},
    name: {type: String, required: true},
    brand: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Array, required: true},
    imageUrl: {type: String, required: true},
    colors: {type: Array, required: true},
    memory: {type: Array, required: true}
    
});

export default mongoose.model("Item", Item);