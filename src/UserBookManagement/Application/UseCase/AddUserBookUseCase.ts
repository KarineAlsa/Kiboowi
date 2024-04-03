import { UserBook } from "../../Domain/Entity/UserBook";
import  UserBookInterface  from "../../Domain/Port/UserBookInterface";

export default class RegisterUserUseCase {

    constructor(readonly repository:UserBookInterface) {}

    async run( { idBook, idUser,state, bookName, authorName,imageUrl,}: {
        idBook: number;
        idUser: any;
        state: number;
        bookName: string;
        authorName: string;
        imageUrl: string;
       
      } ):Promise<UserBook|any> {
        try {

            let book = new UserBook(
                idBook,
                idUser,
                state,
                bookName,
                authorName,
                imageUrl  
            );
            const bookuser = await this.repository.addBookToUser(book);
            
            return bookuser;
             
        }catch(error) {

        }
    }

}