import { UserBook} from "../../Domain/Entity/UserBook";
import userRepository from "../../Domain/Port/UserBookInterface";

export default class GetUserBookUseCase {
    constructor(readonly userRepository: userRepository) {}

    async run(idUser: any, idUserBook:string): Promise<UserBook | string> {
        try {
        const result = await this.userRepository.searchUserBook(idUser,idUserBook);
        return result;
        } catch {
        return 'ocurrió un error';
        }
    }
}