import  express  from "express";
import {  getProfileController, registerController, deleteUserController } from "../Dependencies";
import { loginController } from "../Dependencies";
import {VerifyToken} from "../Controller/Middleware/VerifyToken";
import { updateController } from "../Dependencies";

const userRouter = express.Router();


userRouter.post("/register",registerController.run.bind(registerController));
userRouter.post("/login",loginController.run.bind(loginController));
userRouter.put("/update",VerifyToken,updateController.run.bind(updateController));
userRouter.get("/profile",VerifyToken,getProfileController.run.bind(getProfileController));
userRouter.delete("/delete",VerifyToken,deleteUserController.run.bind(deleteUserController));

export default userRouter;