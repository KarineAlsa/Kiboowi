import { Request, Response } from "express";
import  DeleteUserCase  from "../../Application/UseCase/DeleteUserUseCase";
export default class LoginController {

    constructor(readonly useCase:DeleteUserCase){}

    async run(request:Request,response:Response) {
        
        const id = request.params.id;

        if (!id) {
            return response.status(400).json({
                message: "Debe completar todos los campos.",
                success: false
            });
        }
        try {
            
            let message = await this.useCase.run(id);
           
            if (!message){
                return response
                .status(401)
                .json({
                    message:"No se pudo eliminar",
                    success:false});
            }
            else{
                console.log(message)
                return response
                .status(200)
                .json({
                    data: message,
                    message:"Usuario eliminado", 
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