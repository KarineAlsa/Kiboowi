import {UserBook} from "../Entity/UserBook";

export default interface UserBookInterface{
    searchUserReadingBooks(id:string):Promise<any>;
    addBookToUser(userBook:UserBook):Promise<any>;
    searchUserToReadBooks(id:string):Promise<any>;
    searchUserReadBooks(id:string):Promise<any>;
    updateUserBook(idUser:any,idUserBook:string,updateFields:any):Promise<any>;
    searchUserBook(idUser:any,idUserBook:string):Promise<any>;
}