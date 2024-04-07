import { Request, Response } from "express";
import  UpdateUseCase  from "../../Application/UseCase/UpdateUserBookUseCase";
import { UserBook } from "../../Domain/Entity/UserBook";


export default class UpdateUserBookUseCaseController {

    constructor(readonly useCase:UpdateUseCase){}

    async run(request:Request,response:Response) {
        const idUser=request.params.idUser
        const updateFields: Partial<UserBook> = request.body;
        const idUserBook = request.params.idUserBook
        console.log(typeof(updateFields.notes))

        if (!idUser || !idUserBook) {
            return response.status(400).json({
                message: "Debe completar todos los campos.",
                success: false
            });
        }

        if (idUserBook.trim() === ""){
            return response.status(400).json({
                message: "Los campos no pueden estar vacíos.",
                success: false
            });
        }

        try {
            
            let userBook = await this.useCase.run(idUser,idUserBook, updateFields);
            if (userBook) {
                
                return response.status(200).json({data:userBook,message:"Libro de usuario actualizado",success:true});
            } else {
                response.status(400).send({
                    data: "No data",
                    message: "No se pudo actualizar el libro del usuario",
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
            

        
    }
    }