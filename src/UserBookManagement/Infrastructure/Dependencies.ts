import GetUserReadingBooksCase from "../Application/UseCase/GetUserReadingBooksUseCase";
import AddUserBookUseCase from "../../UserBookManagement/Application/UseCase/AddUserBookUseCase";

import UserBookMySQLRepository from "./Repository/UserBookMySQLRepository"

import AddUserBookController from '../../UserBookManagement/Infrastructure/Controller/AddUserBookController'
import GetReadingBooksController from "./Controller/GetReadingBooksController";

import {JWTS} from "./Service/JWT"

export const userBookMySQLRepository = new UserBookMySQLRepository();
export const currentRepository =  userBookMySQLRepository

export const JWT = new JWTS();

export const getReadingBooksCase = new GetUserReadingBooksCase(currentRepository);
export const addUserBookCase = new AddUserBookUseCase(currentRepository);


export const getReadingBooksController = new GetReadingBooksController(getReadingBooksCase);
export const addUserBookController = new AddUserBookController(addUserBookCase);