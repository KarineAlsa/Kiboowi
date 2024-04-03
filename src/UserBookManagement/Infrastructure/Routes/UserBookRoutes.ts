import { VerifyToken } from "../Controller/Middleware/VerifyToken";
import { 
    addUserBookController, 
    getReadingBooksController, 
    getToReadBooksController, 
    getReadBooksController, 
    updateUserBookController,
    getUserBookController 
} from "../Dependencies";
import  express  from "express";
const userBookRouter = express.Router();

userBookRouter.post("/add-book/",VerifyToken,addUserBookController.run.bind(addUserBookController));
userBookRouter.get("/reading-books/",VerifyToken,getReadingBooksController.run.bind(getReadingBooksController));
userBookRouter.get("/to-read-books/",VerifyToken,getToReadBooksController.run.bind(getToReadBooksController));
userBookRouter.get("/read-books/",VerifyToken,getReadBooksController.run.bind(getReadBooksController));
userBookRouter.put("/update-book/:idUserBook",VerifyToken,updateUserBookController.run.bind(updateUserBookController));
userBookRouter.put("/:idUserBook",VerifyToken,getUserBookController.run.bind(getUserBookController));

export default userBookRouter;