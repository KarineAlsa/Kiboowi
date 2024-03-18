import { User } from "../../Domain/Entity/User";
import  UserInterface  from "../../Domain/Port/UserInterface";

export default class RegisterUserUseCase {

    constructor(readonly repository:UserInterface) {}

    async run( { name, username, email, password, birthdayDate, createdAt}: {
        name: string;
        username: string; 
        email: string;
        password: string;
        birthdayDate: string;
        createdAt: string;
      } ):Promise<User|any> {
        try {

            let user = new User(
                name,
                username,
                email,
                password,
                birthdayDate,
                createdAt
                
            );
            return await this.repository.registerUser(user);
        }catch(error) {

        }
    }

}