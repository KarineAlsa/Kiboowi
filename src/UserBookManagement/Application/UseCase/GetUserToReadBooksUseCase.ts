import { UserBook} from "../../Domain/Entity/UserBook";
import userRepository from "../../Domain/Port/UserBookInterface";

export default class GetUserToReadBooksUseCase {
    constructor(readonly userRepository: userRepository) {}

    async run(idUser: string): Promise<UserBook | string> {
        try {
        const result = await this.userRepository.searchUserToReadBooks(idUser);
        return result;
        } catch {
        return 'ocurrió un error';
        }
    }
}