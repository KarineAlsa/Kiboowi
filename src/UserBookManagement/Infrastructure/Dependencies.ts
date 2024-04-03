import GetUserReadingBooksCase from "../Application/UseCase/GetUserReadingBooksUseCase";
import AddUserBookUseCase from "../../UserBookManagement/Application/UseCase/AddUserBookUseCase";
import GetUserToReadBooksUseCase from "../Application/UseCase/GetUserToReadBooksUseCase";
import GetUserReadBooksUseCase from "../Application/UseCase/GetUserReadBooksUseCase";
import UpdateUserBookUseCase from "../Application/UseCase/UpdateUserBookUseCase";
import GetUserBookUseCase from "../Application/UseCase/GetUserBookUseCase";

import UserBookMySQLRepository from "./Repository/UserBookMySQLRepository"

import AddUserBookController from '../../UserBookManagement/Infrastructure/Controller/AddUserBookController'
import GetReadingBooksController from "./Controller/GetReadingBooksController";
import GetToReadBooksController from "./Controller/GetToReadBooksController";
import GetUserReadBooksController from "./Controller/GetReadBooksController";
import UpdateUserBookController from "./Controller/UpdateUserBookController";
import GetUserBookController from "./Controller/GetUserBookController"

import {JWTS} from "./Service/JWT"

export const userBookMySQLRepository = new UserBookMySQLRepository();
export const currentRepository =  userBookMySQLRepository

export const JWT = new JWTS();

export const getReadingBooksCase = new GetUserReadingBooksCase(currentRepository);
export const addUserBookCase = new AddUserBookUseCase(currentRepository);
export const getToReadBooksCase = new GetUserToReadBooksUseCase(currentRepository);
export const getReadBooksCase = new GetUserReadBooksUseCase(currentRepository);
export const updateUserBookCase = new UpdateUserBookUseCase(currentRepository);
export const getUserBookCase = new GetUserBookUseCase(currentRepository)


export const getReadingBooksController = new GetReadingBooksController(getReadingBooksCase);
export const addUserBookController = new AddUserBookController(addUserBookCase);
export const getToReadBooksController = new GetToReadBooksController(getToReadBooksCase);
export const getReadBooksController = new GetUserReadBooksController(getReadBooksCase);
export const updateUserBookController = new UpdateUserBookController(updateUserBookCase);
export const getUserBookController = new GetUserBookController(getUserBookCase)