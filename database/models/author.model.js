import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  bio: {
    type: String,
  },
  birthDate: {
    type: Date,
  },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
});

const Author = mongoose.model("Author", schema);

export default Author;
