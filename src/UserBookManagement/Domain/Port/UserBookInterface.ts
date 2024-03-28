
import {UserBook} from "../Entity/UserBook";

export default interface UserInterface{
    searchUserReadingBooks(id:string):Promise<any>;
    addBookToUser(userBook:UserBook):Promise<any>;
}