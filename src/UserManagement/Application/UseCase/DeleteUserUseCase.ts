import { User } from "../../Domain/Entity/User";
import  UserInterface  from "../../Domain/Port/UserInterface";


export default class RegisterUserUseCase {

    constructor(readonly repository:UserInterface) {}

    async run(id:string):Promise<User|any> {
        try {

            return await this.repository.deleteUser(id);

        }catch(error) {

        }
    }

}