import { VerifyToken } from "../Controller/Middleware/VerifyToken";
import { addUserBookController, getReadingBooksController } from "../Dependencies";
import  express  from "express";
const userBookRouter = express.Router();

userBookRouter.post("/add-book/",VerifyToken,addUserBookController.run.bind(addUserBookController));
userBookRouter.get("/reading-books/",VerifyToken,getReadingBooksController.run.bind(getReadingBooksController));

export default userBookRouter;