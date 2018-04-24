import mongoose from "mongoose";

const SchemaLgot = mongoose.Schema;

const LgSchema = new SchemaLgot({
    name     : { type: String, required:true },
    text     : { type: String, required: true },
    size     : { type: String, required: true },
    // color     : { type: String },
    // createdAt : { type: Date }
});

mongoose.model('Lgota', LgSchema);
