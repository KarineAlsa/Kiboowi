import RegisterUserCase from "../Application/UseCase/RegisterUserUseCase";

import UserMySQLRepository from "./Repository/UserMysqlRepository"

import RegisterUserController from './Controller/RegisterController'

export const MySqlUserRepository = new UserMySQLRepository();
export const currentRepository =  MySqlUserRepository

export const registerCase = new RegisterUserCase(currentRepository);


export const registerController = new RegisterUserController(registerCase);

