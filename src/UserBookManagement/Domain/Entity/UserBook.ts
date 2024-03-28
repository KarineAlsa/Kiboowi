export class UserBook {


    public idBook:number;
    public idUser:number;
    public state:number;
    public bookName:string;
    public authorName:string;
    public imageUrl:string;
    public id?:number

    constructor(
        idBook:number,
        idUser:number,
        state:number,
        bookName:string,
        authorName:string,
        imageUrl:string,
        id?:number
    ) {
       
        this.idBook = idBook;
        this.idUser = idUser;
        this.state = state;
        this.bookName = bookName;
        this.authorName = authorName;
        this.imageUrl = imageUrl;
        this.id = id;
    }

    public getId(){
        return this.id;
    }
    public getIdBook(){
        return this.idBook;
    }
    public getIdUser(){
        return this.idUser;
    }
    public getState(){
        return this.state;
    }
    public getBookName(){
        return this.bookName;
    }
    public getAuthorName(){
        return this.authorName;
    }
    public getImageUrl(){
        return this.imageUrl;
    }

}