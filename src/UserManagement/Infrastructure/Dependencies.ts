import RegisterUserCase from "../Application/UseCase/RegisterUserUseCase";
import LoginUserCase from "../Application/UseCase/LoginUserUseCase";
import UpdateUserCase from "../Application/UseCase/UpdateUserUseCase";

import UserMySQLRepository from "./Repository/UserMysqlRepository"

import {JWTS} from "./Service/JWT"

import RegisterUserController from './Controller/RegisterController'
import LoginUserController from './Controller/LoginController'
import UpdateUserController from './Controller/UpdateUserController'

export const JWT = new JWTS();

export const MySqlUserRepository = new UserMySQLRepository();
export const currentRepository =  MySqlUserRepository

export const registerCase = new RegisterUserCase(currentRepository);
export const loginCase = new LoginUserCase(currentRepository);
export const updateCase = new UpdateUserCase(currentRepository);

export const registerController = new RegisterUserController(registerCase);
export const loginController = new LoginUserController(loginCase, JWT);
export const updateController = new UpdateUserController(updateCase);