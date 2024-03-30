
import {UserBook} from "../Entity/UserBook";

export default interface UserInterface{
    searchUserReadingBooks(id:string):Promise<any>;
    addBookToUser(userBook:UserBook):Promise<any>;
    searchUserToReadBooks(id:string):Promise<any>;
    searchUserReadBooks(id:string):Promise<any>;
}