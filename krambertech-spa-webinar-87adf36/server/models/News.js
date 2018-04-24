import mongoose from "mongoose";

const SchemaNews = mongoose.Schema;

const NewsSchema = new SchemaNews({
    name     : { type: String, required:true },
    date     : { type: String, required: true },
    text     : { type: String, required: true },
    // color     : { type: String },
    // createdAt : { type: Date }
});

mongoose.model('News', NewsSchema);
