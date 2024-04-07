import { UserBook } from "../../Domain/Entity/UserBook";
import  UserBookInterface  from "../../Domain/Port/UserBookInterface";

export default class RegisterUserUseCase {

    constructor(readonly repository:UserBookInterface) {}

    async run( { idBook, idUser,state, bookName, authorName,imageUrl, initialDate, finishDate,notes,reaction }: {
        idBook: string;
        idUser: any;
        state: number;
        bookName: string;
        authorName: string;
        imageUrl: string;
        initialDate?:string,
        finishDate?:string,
        notes?:string,
        reaction?:string,
       
      } ):Promise<UserBook|any> {
        try {

            let book = new UserBook(
                idBook,
                idUser,
                state,
                bookName,
                authorName,
                imageUrl,
                initialDate,
                finishDate,
                notes,
                reaction
            );
            const bookuser = await this.repository.addBookToUser(book);
            
            return bookuser;
             
        }catch(error) {

        }
    }

}