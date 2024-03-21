import {User} from "../../Domain/Entity/User";
import userRepository from "../../Domain/Port/UserInterface";

export default class GetOneCase {
    constructor(readonly userRepository: userRepository) {}

    async run(id: string): Promise<User | string> {
        try {
        const result = await this.userRepository.searchUserReadingBooks(id);
        return result;
        } catch {
        return 'ocurrió un error';
        }
    }
}