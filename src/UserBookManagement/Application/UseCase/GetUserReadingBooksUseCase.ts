import { UserBook} from "../../Domain/Entity/UserBook";
import userRepository from "../../Domain/Port/UserBookInterface";

export default class GetOneCase {
    constructor(readonly userRepository: userRepository) {}

    async run(idUser: string): Promise<UserBook | string> {
        try {
        const result = await this.userRepository.searchUserReadingBooks(idUser);
        return result;
        } catch {
        return 'ocurrió un error';
        }
    }
}