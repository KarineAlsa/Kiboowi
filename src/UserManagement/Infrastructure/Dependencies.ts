import RegisterUserCase from "../Application/UseCase/RegisterUserUseCase";
import LoginUserCase from "../Application/UseCase/LoginUserUseCase";

import UserMySQLRepository from "./Repository/UserMysqlRepository"

import {JWTS} from "./Service/JWT"

import RegisterUserController from './Controller/RegisterController'
import LoginUserController from './Controller/LoginController'

export const JWT = new JWTS();

export const MySqlUserRepository = new UserMySQLRepository();
export const currentRepository =  MySqlUserRepository

export const registerCase = new RegisterUserCase(currentRepository);
export const loginCase = new LoginUserCase(currentRepository);

export const registerController = new RegisterUserController(registerCase);
export const loginController = new LoginUserController(loginCase, JWT);
