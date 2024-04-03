import { Request, Response } from "express";
import  GetToReadBooksUseCase  from "../../Application/UseCase/GetUserToReadBooksUseCase";


export default class GetToReadBooksController {

    constructor(readonly useCase:GetToReadBooksUseCase){}

    async run(request:Request,response:Response) {

        const idUser = request.params.idUser
        if (idUser != ""  ){

        try {
            
            let result = await this.useCase.run(idUser);
            if (result) {
                
                return response.status(200).json({data:result,message:"Libros por leer obtenidos",success:true});
            } else {
                response.status(400).send({
                    data: "No data",
                    message: "No se pudo encontrar libros por leer",
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
            

        }else{
            response.status(400).send({
                data:"Error",
                message: "Debe proveer información",
                success:false
            });
        }
    }
    }