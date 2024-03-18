import { Request, Response } from "express";
import  LoginUserCase  from "../../Application/UseCase/LoginUserUseCase";
export default class LoginController {

    constructor(readonly useCase:LoginUserCase){}

    async run(request:Request,response:Response) {
        const { email,password} = request.body;
        const mail = email;
        if (!mail || !password ) {
            return response.status(400).json({
                message: "Debe completar todos los campos.",
                success: false
            });
        }
        if (mail.trim() === "" || password.trim() === "" ) {
            return response.status(400).json({
                message: "Los campos no pueden estar vacíos.",
                success: false
            });
        }
        try {
            
            let orderItem = await this.useCase.run(mail,password);
           
            if (!orderItem){
                return response
                .status(401)
                .json({
                    message:"Revise credenciales",
                    success:false});
            }
            else{
                console.log(orderItem)
                return response
                .status(200)
                .json({
                    data: orderItem,
                    message:"Login exitoso", 
                    success:true});
            }
            
           

        }catch(error:any) {
            response.status(error.http_status ?? 500)
                .json({
                    data:error,
                    message:"Error",
                    success:false
                });
        }
    }

}