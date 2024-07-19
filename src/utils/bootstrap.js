import express from "express";
import cors from "cors";
import handleNotFoundError from "./../middleware/notfoundError.middleware.js";
import globalErrorHandler from "./../middleware/errorHandling.middleware.js";

// * made to collect every app.use in the entry file
export default function bootstrap(app) {
  // ^allow any domain to access my app endpoints
  app.use(cors());

  // ^parses the body of the request that includes JSON payload
  app.use(express.json());

  // ^handle app routes
  app.use("/book", authRouter);
  app.use("/author", userRouter);

  // ^handles the response of any error in the app server
  app.use(globalErrorHandler);

  // ^handles not found error by passing the error to the globalErrorHandler
  app.use("*", handleNotFoundError);
}
