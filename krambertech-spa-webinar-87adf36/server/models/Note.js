import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AccSchema = new Schema({
    email     : { type: String, required:true },
    password      : { type: String, required: true },
    // color     : { type: String },
    // createdAt : { type: Date }
});

mongoose.model('Account', AccSchema);
