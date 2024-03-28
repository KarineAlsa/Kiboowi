import { UserBook } from "../../../../src/UserBookManagement/Domain/Entity/UserBook";
import UserBookInterface  from "../../../../src/UserBookManagement/Domain/Port/UserBookInterface";
import bcrypt, { hashSync } from 'bcrypt'
import query from "../../../Database/mysql";

export default class UserMysqlRepository implements UserBookInterface {
  async addBookToUser(userBook: UserBook): Promise<any> {
    const sql = "INSERT INTO UserBook (idBook, idUser, state, bookName,authorName,imageUrl) VALUES (?,?,?,?,?,?)";
    
    const params: any[] = [userBook.getIdBook(), userBook.getIdUser(), userBook.getState(), userBook.getBookName(), userBook.getAuthorName(), userBook.getImageUrl()];
    try {
      const [result]: any = await query(sql, params);
      console.log(result);

    if (result) {
      userBook.id = result.insertId;
      return userBook

    } else {
      throw new Error("Error al insertar el usuario en la base de datos");
    }
    }
    catch (error) {
    throw new Error(`Error en la operación de guardado`);
    }
  }
  async searchUserReadingBooks(id: string): Promise<any> {
    const sql = "SELECT * FROM UserBook WHERE idUser = ? AND state = 2";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      console.log(result)
      if (result){
        return result
      }
      else {
        false
      }
    }
    catch (error) {
      false
    }
  }
}