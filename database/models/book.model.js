import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  content: {
    type: String,
    required: [true, "content is required"],
  },
  author: {
    type: String,
    required: [true, "author is required"],
  },
  publishedDate: {
    type: Date,
    default: new Date(),
  },
});

const Book = mongoose.model("Book", schema);

export default Book;
