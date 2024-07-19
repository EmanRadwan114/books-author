import { Router } from "express";
import {
  addAuthor,
  deleteAuthor,
  getAllAuthors,
  updateAuthor,
} from "./author.controllers.js";

const authorRouter = Router();

authorRouter.route("/").post(addAuthor).get(getAllAuthors);

authorRouter.route("/:authorId").patch(updateAuthor).delete(deleteAuthor);

export default authorRouter;
