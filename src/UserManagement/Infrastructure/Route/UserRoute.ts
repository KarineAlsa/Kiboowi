import  express  from "express";
import { registerController } from "../Dependencies";
import { loginController } from "../Dependencies";

const userRouter = express.Router();


userRouter.post("/register",registerController.run.bind(registerController));
userRouter.post("/login",loginController.run.bind(loginController));

export default userRouter;