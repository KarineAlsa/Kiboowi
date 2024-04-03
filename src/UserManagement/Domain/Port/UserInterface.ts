import {User} from "../Entity/User";

export default interface UserInterface{
    registerUser(user:User):Promise<User|any>;
    login(mail:string,password:string):Promise<User|any>;
    updateUser(id:string,updateFields:any):Promise<User|any>;
    searchUserById(id:string):Promise<User|any>;
    deleteUser(id:string):Promise<User|any>;
}