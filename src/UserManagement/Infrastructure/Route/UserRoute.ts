import  express  from "express";
import { getProfileController, registerController } from "../Dependencies";
import { loginController } from "../Dependencies";
import {VerifyToken} from "../Controller/Middleware/VerifyToken";
import { updateController } from "../Dependencies";
import { getReadingBooksController } from "../Dependencies";

const userRouter = express.Router();


userRouter.post("/register",registerController.run.bind(registerController));
userRouter.post("/login",loginController.run.bind(loginController));
userRouter.put("/update",VerifyToken,updateController.run.bind(updateController));
userRouter.get("/profile",VerifyToken,getProfileController.run.bind(getProfileController));
userRouter.get("/reading-books/",VerifyToken,getReadingBooksController.run.bind(getReadingBooksController));

export default userRouter;