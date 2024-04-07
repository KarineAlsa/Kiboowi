import { UserBook} from "../../Domain/Entity/UserBook";
import userRepository from "../../Domain/Port/UserBookInterface";

export default class GetUserReadingBooksUseCase {
    constructor(readonly userRepository: userRepository) {}

    async run(idUser: any): Promise<UserBook | string> {
        try {
        const result = await this.userRepository.searchUserReadingBooks(idUser);
        return result;
        } catch {
        return 'ocurrió un error';
        }
    }
}