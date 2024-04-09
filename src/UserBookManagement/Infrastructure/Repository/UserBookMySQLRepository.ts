import { UserBook } from "../../Domain/Entity/UserBook";
import UserBookInterface  from "../../Domain/Port/UserBookInterface";
import bcrypt, { hashSync } from 'bcrypt'
import query from "../../../Database/mysql";

export default class UserMysqlRepository implements UserBookInterface {
  async searchUserBook(idUser: any, idUserBook: string): Promise<any> {
    const sql = "SELECT * FROM UserBook WHERE idUser = ? AND id = ?";
    const params: any[] = [idUser,idUserBook];
    try {
      const [[result]]: any = await query(sql, params);
      
      if (result){
      
        const initialDate=result.initialDate.toISOString().slice(0, 10);
        const finishDate = result.finishDate.toISOString().slice(0, 10);
        return {
          id:result.id,
          idBook:result.idBook, 
          idUser: result.idUser, 
          state:result.state, 
          bookName:result.bookName,
          authorName:result.authorName,
          imageUrl:result.imageUrl,
          initialDate:initialDate,
          finishDate:finishDate,
          notes:result.notes,
          reaction:result.reaction
        };
      }
      
      else {
        false
      }
    }
    catch (error) {
      false
    }
  }

  async searchUserReadBooks(id: string): Promise<any> {
    const sql = "SELECT * FROM UserBook WHERE idUser = ? AND state = 2";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      
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
    const sql = "SELECT * FROM UserBook WHERE idUser = ? AND state = 1";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      
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
    const sql = "INSERT INTO UserBook ( idBook, idUser, state, bookName,authorName,imageUrl, initialDate, finishDate, notes, reaction) VALUES (?,?,?,?,?,?,?,?,?,?)";
    
    const params: any[] = [userBook.getIdBook(), userBook.getIdUser(), userBook.getState(), userBook.getBookName(), userBook.getAuthorName(), userBook.getImageUrl(), userBook.getInitialDate(), userBook.getFinishDate(), userBook.getNotes(), userBook.getReaction()];
    try {
      const [result]: any = await query(sql, params);
      

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
    const sql = "SELECT * FROM UserBook WHERE idUser = ? AND state = 3";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
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
  
  async updateUserBook(idUser:any,idUserBook:string, updateFields:any): Promise<any> {
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