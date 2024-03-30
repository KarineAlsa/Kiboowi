import GetToReadBooksByUserId from '../../../../src/UserBookManagement/Application/UseCase/GetUserToReadBooksUseCase';
import UserBookInterface from '../../../../src/UserBookManagement/Domain/Port/UserBookInterface';
import { UserBook } from '../../../../src/UserBookManagement/Domain/Entity/UserBook';

describe('GetToReadBooksByUserId', () => {
  it('should return a list of books that user wants to read', async () => {
    // Arrange
    const expectedUserBooks: UserBook[] = [
        new UserBook(
            1,
            1,
            0,
            'Book 1',
            'Author 1',
            'image1.jpg'
          ),
          new UserBook(
            2,
            1,
            0,
            'Book 2',
            'Author 2',
            'image2.jpg'
          ),
    ];

    const mockRepository: UserBookInterface = {
      searchUserToReadBooks: jest.fn().mockResolvedValueOnce(expectedUserBooks),
      addBookToUser: function (userBook: UserBook): Promise<any> {
        throw new Error('Function not implemented.');
      },
      searchUserReadingBooks: function (id: string): Promise<any> {
        throw new Error('Function not implemented.');
      },
      searchUserReadBooks: function (id: string): Promise<any> {
        throw new Error('Function not implemented.');
      }
    };

    const getToReadBooksByUserId = new GetToReadBooksByUserId(mockRepository);

    // Act
    const result = await getToReadBooksByUserId.run('user_id');
    

    // Assert
    expect(result).toEqual(expectedUserBooks);
    expect(mockRepository.searchUserToReadBooks).toHaveBeenCalledWith('user_id');
  });

 
});
