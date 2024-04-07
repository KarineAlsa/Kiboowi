import { Request, Response } from "express";
import  AddUserBookUseCase  from "../../Application/UseCase/AddUserBookUseCase";


export default class AddUserBookController {

    constructor(readonly useCase:AddUserBookUseCase){}

    async run(request:Request,response:Response) {
        
        const { idBook, state, bookName, authorName, imageUrl, initialDate, finishDate, notes, reaction } = request.body;
        const idUser = request.params.idUser;
        

        
        if (!idBook || !idUser || !state || !bookName || !authorName || !imageUrl) {
            return response.status(400).json({
                message: "Debe completar todos los campos.",
                success: false
            });
        }
        if (bookName.trim() === "" || authorName.trim() === "" || imageUrl.trim() === ""){
            return response.status(400).json({
                message: "Los campos no pueden estar vacíos.",
                success: false
            });
        }
        try {
            const book = await this.useCase.run({
                idBook: idBook,
                idUser: Number(idUser),
                state: state,
                bookName: bookName,
                authorName: authorName,
                imageUrl: imageUrl,
                initialDate: initialDate,
                finishDate: finishDate,
                notes: notes,
                reaction: reaction
            });
            
            
            if (book) {
                
                return response.status(200).json({data:book,message:"Libro añadido",success:true});
            } else {
                response.status(400).send({
                    
                    message: "No se pudo añadir el libro al usuario",
                    success: false,
                });
            }
        } catch (error:any) {
            console.log(error)
            response.status(500).send({
                
                message: "Ha ocurrido un error durante su petición.",
                success:false
            });
        }
    }
    }