import { UserBook } from "../../Domain/Entity/UserBook";
import  UserBookInterface  from "../../Domain/Port/UserBookInterface";


export default class UpdateUserBookUseCase {

    constructor(readonly repository:UserBookInterface) {}

    async run(idUser:any,idUserBook:string,updateFields:any):Promise<UserBook|any> {
        try {

            return await this.repository.updateUserBook(idUser,idUserBook,updateFields);

        }catch(error) {

        }
    }

}