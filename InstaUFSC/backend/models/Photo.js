const mongoose = require("mongoose");
const {Schema} = mongoose;

const photoSchema = new Schema (
    {
        image: String,
        title: String,
        likes: Array,
        comments: Array,
        //usuario que inseriu foto
        userId: mongoose.objectId,

        //para associar o nome do usuario a foto
        userName: String,
    },
    {
        timestamps: true,
    }
)