import { UserBook } from "../../Domain/Entity/UserBook";
import UserBookInterface  from "../../Domain/Port/UserBookInterface";
import bcrypt, { hashSync } from 'bcrypt'
import query from "../../../Database/mysql";

export default class UserMysqlRepository implements UserBookInterface {

  async searchUserReadBooks(id: string): Promise<any> {
    const sql = "SELECT * FROM UserBook WHERE idUser = ? AND state = 1";
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
    
  async searchUserToReadBooks(id: string): Promise<any> {
    const sql = "SELECT * FROM UserBook WHERE idUser = ? AND state = 0";
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
  
  async updateUserBook(idUser:number,idUserBook:number, updateFields:any): Promise<any> {
    let updateQuery = "UPDATE UserBook SET ";
    const params: any[] = [];
    Object.entries(updateFields).forEach(([key, value]) => {
      if(key=="initialDate" || key=="finishDate"){
        value = new Date(value as string).toISOString().slice(0, 10); 
      }
      updateQuery += `${key} = ?, `;
      params.push(value);
    });
    updateQuery = updateQuery.slice(0, -2);
    updateQuery += " WHERE id = ? and idUser = ?";
    params.push(idUserBook);
    params.push(idUser);
    try {
      const [result]: any = await query(updateQuery, params);

      if (result && result.affectedRows > 0) {
        return true
      } else {
        return false
      }
    } catch (error) {
      return false
    }

  }
}