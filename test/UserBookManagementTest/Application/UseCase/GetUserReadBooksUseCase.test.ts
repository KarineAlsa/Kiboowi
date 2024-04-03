import GetReadBooksByUserId from '../../../../src/UserBookManagement/Application/UseCase/GetUserReadBooksUseCase';
import UserBookInterface from '../../../../src/UserBookManagement/Domain/Port/UserBookInterface';
import { UserBook } from '../../../../src/UserBookManagement/Domain/Entity/UserBook';

describe('GetReadBooksByUserId', () => {
  it('should return a list of books that user has already read', async () => {
    // Arrange
    const expectedUserBooks: UserBook[] = [
        new UserBook(
            1,
            1,
            1,
            'Book 1',
            'Author 1',
            'image1.jpg'
          ),
          new UserBook(
            2,
            1,
            1,
            'Book 2',
            'Author 2',
            'image2.jpg'
          ),
    ];

    const mockRepository: UserBookInterface = {
      searchUserReadBooks: jest.fn().mockResolvedValueOnce(expectedUserBooks),
      addBookToUser: function (userBook: UserBook): Promise<any> {
        throw new Error('Function not implemented.');
      },
      searchUserReadingBooks: function (id: string): Promise<any> {
        throw new Error('Function not implemented.');
      },
      searchUserToReadBooks: function (id: string): Promise<any> {
        throw new Error('Function not implemented.');
      },
      updateUserBook: function (idUser: number, idUserBook: number, updateFields: any): Promise<any> {
        throw new Error('Function not implemented.');
      }
    };

    const getToReadBooksByUserId = new GetReadBooksByUserId(mockRepository);

    // Act
    const result = await getToReadBooksByUserId.run('user_id');
    

    // Assert
    expect(result).toEqual(expectedUserBooks);
    expect(mockRepository.searchUserReadBooks).toHaveBeenCalledWith('user_id');
  });

 
});
