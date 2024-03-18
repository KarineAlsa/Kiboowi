import {User} from "../../Domain/Entity/User";
import userRepository from "../../Domain/Port/UserInterface";

export default class GetOneCase {
    constructor(readonly userRepository: userRepository) {}

    async run(mail:string, password:string): Promise<User | any> {
        try {
        const result = await this.userRepository.login(mail,password);
        
        return result;
        } catch {
        return 'Ocurrió un error';
        }
    }
}