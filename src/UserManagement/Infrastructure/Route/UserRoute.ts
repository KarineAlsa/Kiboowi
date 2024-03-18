import  express  from "express";
import { registerController } from "../Dependencies";


const userRouter = express.Router();


userRouter.post("/register",registerController.run.bind(registerController));


export default userRouter;