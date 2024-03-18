export class User {

    public name:string;
    public username:string;
    public email:string;
    public password:string;
    public birthdayDate:string;
    public createdAt:string;
    public id?:number

    constructor(
        name:string,
        username:string,
        email:string,
        password:string,
        birthdayDate:string,
        createdAt:string,
        id?:number
    ) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.birthdayDate = birthdayDate;
        this.createdAt = createdAt;
        this.id = id;
    }

    public getId(){
        return this.id;
    }
    public getName(){
        return this.name;
    }
    public getLastName(){
        return this.username;
    }
    public getEmail(){
        return this.email;
    }
    public getBirthday(){
        return this.birthdayDate;
    }
    public getCreatedAt(){
        return this.createdAt;
    }

}