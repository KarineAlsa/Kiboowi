import AddBookUserUseCase from '../../../../src/UserBookManagement/Application/UseCase/AddUserBookUseCase';
import UserBookInterface from '../../../../src/UserBookManagement/Domain/Port/UserBookInterface';
import { UserBook } from '../../../../src/UserBookManagement/Domain/Entity/UserBook';

describe('AddBookUserUseCase', () => {
  it('should add a book to user', async () => {
    // Arrange
    const mockRepository: UserBookInterface = {
      addBookToUser: jest.fn().mockResolvedValueOnce('Book added successfully'),
      searchUserReadingBooks: function (id: string): Promise<any> {
        throw new Error('Function not implemented.');
      },
      searchUserToReadBooks: function (id: string): Promise<any> {
        throw new Error('Function not implemented.');
      }
    };

    const addBookUserUseCase = new AddBookUserUseCase(mockRepository);

    // Act
    const result = await addBookUserUseCase.run({
      idBook: 4,
      idUser: 3,
      state: 2,
      bookName: 'Test Book',
      authorName: 'Test Author',
      imageUrl: 'test.jpg',
    });

    // Assert
    expect(result).toEqual('Book added successfully');
    expect(mockRepository.addBookToUser).toHaveBeenCalledWith(expect.any(UserBook));
  });

  
  });
