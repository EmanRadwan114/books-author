import { Router } from "express";
import {
  addBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
} from "./book.controllers.js";

const bookRouter = Router();

bookRouter.route("/").post(addBook).get(getAllBooks);

bookRouter
  .route("/:bookId")
  .get(getBookById)
  .patch(updateBook)
  .delete(deleteBook);

export default bookRouter;
