import { Router } from "express";
import {
  addAuthor,
  deleteAuthor,
  getAllAuthors,
  getAuthorById,
  updateAuthor,
} from "./author.controllers.js";

const authorRouter = Router();

authorRouter.route("/").post(addAuthor).get(getAllAuthors);

authorRouter
  .route("/:authorId")
  .get(getAuthorById)
  .patch(updateAuthor)
  .delete(deleteAuthor);

export default authorRouter;
