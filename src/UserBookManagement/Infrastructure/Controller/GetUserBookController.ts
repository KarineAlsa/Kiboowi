import { Request, Response } from "express";
import  GetUserBooksUseCase  from "../../Application/UseCase/GetUserBookUseCase";


export default class GetReadBooksController {

    constructor(readonly useCase:GetUserBooksUseCase){}

    async run(request:Request,response:Response) {

        const idUser = request.params.idUser
        const idUserBook = request.params.idUserBook

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
            
            let result = await this.useCase.run(Number(idUser),Number(idUserBook));
            if (result) {
                
                return response.status(200).json({data:result,message:"Información del libro obtenido",success:true});
            } else {
                response.status(400).send({
                    data: "No data",
                    message: "No se pudo encontrar el libro",
                    success: false,
                });
            }
        } catch (error) {
            console.log(error)
            response.status(500).send({
                data:error ,
                message: "Ha ocurrido un error durante su petición.",
                success:false
            });
        }
            

        }
    }