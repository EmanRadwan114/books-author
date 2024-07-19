import catchError from "../../utils/Handle Errrors/catchError.js";
import AppError from "../../utils/Handle Errrors/AppError.js";
import Book from "./../../../database/models/book.model.js";

export const addBook = catchError(async (req, res, next) => {
  const book = new Book(req.body);
  if (!book) return next(new AppError("book can not be added, 409"));

  await book.save();
  return res.status(201).json({ message: "success", book });
});

export const getAllBooks = catchError(async (req, res, next) => {
  const books = await Book.find();
  if (!books || books.length === 0)
    return next(new AppError("no books are found, 404"));

  return res.status(201).json({ message: "success", books });
});

export const getBookById = catchError(async (req, res, next) => {
  const book = await Book.findById(req.params.bookId);
  if (!book) return next(new AppError("there is no book found, 404"));

  return res.status(201).json({ message: "success", book });
});

export const updateBook = catchError(async (req, res, next) => {
  const book = await Book.findByIdAndUpdate(
    { _id: req.params.bookId },
    req.body
  );
  if (!book) return next(new AppError("there is no book found, 404"));

  return res.status(201).json({ message: "success", book });
});

export const deleteBook = catchError(async (req, res, next) => {
  const book = await Book.findByIdAndDelete({ _id: req.params.bookId });
  if (!book) return next(new AppError("there is no book found, 404"));

  return res.status(201).json({ message: "success", book });
});
