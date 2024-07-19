import catchError from "../../utils/Handle Errrors/catchError.js";
import AppError from "../../utils/Handle Errrors/AppError.js";
import Author from "./../../../database/models/author.model.js";

export const addAuthor = catchError(async (req, res, next) => {
  const author = new Author(req.body);
  if (!author) return next(new AppError("author can not be added, 409"));

  await author.save();
  return res.status(201).json({ message: "success", author });
});

export const getAllAuthors = catchError(async (req, res, next) => {
  const authors = await Author.find();
  if (!authors || authors.length === 0)
    return next(new AppError("no authors are found, 404"));

  return res.status(201).json({ message: "success", authors });
});

export const getAuthorById = catchError(async (req, res, next) => {
  const author = await Author.findById(req.params.authorId).populate("books");
  if (!author) return next(new AppError("there is no author found, 404"));

  return res.status(201).json({ message: "success", author });
});

export const updateAuthor = catchError(async (req, res, next) => {
  const author = await Author.findByIdAndUpdate(
    { _id: req.params.authorId },
    req.body,
    { new: true }
  );
  if (!author) return next(new AppError("there is no author found, 404"));

  return res.status(201).json({ message: "success", author });
});

export const deleteAuthor = catchError(async (req, res, next) => {
  const author = await Author.findByIdAndDelete({ _id: req.params.authorId });
  if (!author) return next(new AppError("there is no author found, 404"));

  return res.status(201).json({ message: "success", author });
});
