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
  const author = await Author.findById(req.params.id);
  if (!author) return next(new AppError("there is no author found, 404"));

  return res.status(201).json({ message: "success", author });
});

export const updateAuthor = catchError(async (req, res, next) => {
  const author = await Author.findByIdAndUpdate(req.params.id, req.body);
  if (!author) return next(new AppError("there is no author found, 404"));

  return res.status(201).json({ message: "success", author });
});

export const deleteAuthor = catchError(async (req, res, next) => {
  const author = await Author.findByIdAndDelete(req.params.id, req.body);
  if (!author) return next(new AppError("there is no author found, 404"));

  return res.status(201).json({ message: "success", author });
});