import { Request, Response } from "express";
import  RegisterUseCase  from "../../Application/UseCase/RegisterUserUseCase";


export default class RegisterController {

    constructor(readonly useCase:RegisterUseCase){}

    async run(request:Request,response:Response) {
        //La fecha de nacimiento tiene que ir en formato YYYY-MM-DD
        const { email, name, username, password, birthday } = request.body;
        
        if (!email || !name || !username || !password || !birthday) {
            return response.status(400).json({
                message: "Debe completar todos los campos.",
                success: false
            });
        }
        if (email.trim() === "" || name.trim() === "" || username.trim() === "" || password.trim() === "" || birthday.trim() === "") {
            return response.status(400).json({
                message: "Los campos no pueden estar vacíos.",
                success: false
            });
        }
        try {
            const birthdayDate = new Date(birthday).toISOString().slice(0, 10); 
            const createdAt = new Date().toISOString().slice(0, 10);
            
            let user = await this.useCase.run({
                name: name,
                username: username,
                email: email,
                password: password,
                birthdayDate: birthdayDate,
                createdAt: createdAt
            });
            if (user) {
                return response.status(200).json({data:user,message:"Usuario creado",success:true});
            } else {
                response.status(400).send({
                    
                    message: "No se pudo crear el usuario",
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