import mongoose from "mongoose";
 
const noteSchema = new mongoose.Schema({
    note:{
        type:String,
        require:true,
        min:3
    }
})

const Note = new mongoose.model("Note", noteSchema)

export default Note;