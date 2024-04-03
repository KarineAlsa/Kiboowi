import UpdateUserBookUseCase from '../../../../src/UserBookManagement/Application/UseCase/UpdateUserBookUseCase';
import UserBookInterface from '../../../../src/UserBookManagement/Domain/Port/UserBookInterface';
import { UserBook } from '../../../../src/UserBookManagement/Domain/Entity/UserBook';

const mockRepository: UserBookInterface = {
  updateUserBook: jest.fn(),
  searchUserReadingBooks: function (id: string): Promise<any> {
    throw new Error('Function not implemented.');
  },
  addBookToUser: function (userBook: UserBook): Promise<any> {
    throw new Error('Function not implemented.');
  },
  searchUserToReadBooks: function (id: string): Promise<any> {
    throw new Error('Function not implemented.');
  },
  searchUserReadBooks: function (id: string): Promise<any> {
    throw new Error('Function not implemented.');
  },
  searchUserBook: function (idUser: number, idUserBook: number): Promise<any> {
    throw new Error('Function not implemented.');
  }
};

const updateUserBookUseCase = new UpdateUserBookUseCase(mockRepository);

describe('UpdateUserBookUseCase', () => {
  beforeEach(() => {
    
    jest.clearAllMocks();
  });

  it('should update user book successfully', async () => {
    
    const idUser = 3;
    const id= 24;
    const updateFields = {
      initialDate: '2024-03-01',
      finishDate: '2024-03-30',
      notes: 'muy buen libro',
      reaction: 'emote_happy.png',
    };
    
    (mockRepository.updateUserBook as jest.Mock).mockResolvedValueOnce(true);
    
    const result = await updateUserBookUseCase.run(idUser, id, updateFields);
   
    expect(mockRepository.updateUserBook).toHaveBeenCalledWith(idUser, id, updateFields);

    expect(result).toEqual(true);
  });

});
