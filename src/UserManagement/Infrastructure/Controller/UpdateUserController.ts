import { Request, Response } from "express";
import  UpdateUseCase  from "../../Application/UseCase/UpdateUserUseCase";
import { User } from "../../Domain/Entity/User";


export default class UpdateUserUseCaseController {

    constructor(readonly useCase:UpdateUseCase){}

    async run(request:Request,response:Response) {
        const id=request.params.id
        const updateFields: Partial<User> = request.body;
        if (!updateFields.password) {
            return response.status(400).json({
                message: "Nada por actualizar",
                success: false
            });
        }
        if (updateFields.password.trim() === "" ) {
            return response.status(400).json({
                message: "Los campos no pueden estar vacíos.",
                success: false
            });
        }
        
        if (id !=""){

        try {
            
            let user = await this.useCase.run(id, updateFields);
            if (user) {
                
                return response.status(200).json({data:user,message:"Usuario actualizado",success:true});
            } else {
                response.status(400).send({
                    data: "No data",
                    message: "No se pudo actualizar el usuario",
                    success: false,
                });
            }
        } catch (error) {
           
            response.status(500).send({
                data:error ,
                message: "Ha ocurrido un error durante su petición.",
                success:false
            });
        }
            

        }else{
            response.status(400).send({
                data:"Error",
                message: "Error",
                success:false
            });
        }
    }
    }