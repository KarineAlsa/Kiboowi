import { VerifyToken } from "../Controller/Middleware/VerifyToken";
import { addUserBookController, getReadingBooksController, getToReadBooksController, getReadBooksController } from "../Dependencies";
import  express  from "express";
const userBookRouter = express.Router();

userBookRouter.post("/add-book/",VerifyToken,addUserBookController.run.bind(addUserBookController));
userBookRouter.get("/reading-books/",VerifyToken,getReadingBooksController.run.bind(getReadingBooksController));
userBookRouter.get("/to-read-books/",VerifyToken,getToReadBooksController.run.bind(getToReadBooksController));
userBookRouter.get("/read-books/",VerifyToken,getReadBooksController.run.bind(getReadBooksController));

export default userBookRouter;