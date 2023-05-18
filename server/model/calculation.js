import mongoose from "mongoose";

//Mongoose schema that will be applied to my database

const calculationSchema= mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    calculation: {
        type: String,
        required: true,
    },
    result: {
        type: String,
        required: true,
    }
})

const History = mongoose.model("History", calculationSchema);

export default History;