import GetReadingBooksByUserId from '../../../../src/UserBookManagement/Application/UseCase/GetUserReadingBooksUseCase';
import UserBookInterface from '../../../../src/UserBookManagement/Domain/Port/UserBookInterface';
import { UserBook } from '../../../../src/UserBookManagement/Domain/Entity/UserBook';

describe('GetReadingBooksByUserId', () => {
  it('should return a list of books that user is reading', async () => {
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
      searchUserReadingBooks: jest.fn().mockResolvedValueOnce(expectedUserBooks),
      addBookToUser: function (userBook: UserBook): Promise<any> {
        throw new Error('Function not implemented.');
      },
      searchUserToReadBooks: function (id: string): Promise<any> {
        throw new Error('Function not implemented.');
      }
    };

    const getReadingBooksByUserId = new GetReadingBooksByUserId(mockRepository);

    // Act
    const result = await getReadingBooksByUserId.run('user_id');
    

    // Assert
    expect(result).toEqual(expectedUserBooks);
    expect(mockRepository.searchUserReadingBooks).toHaveBeenCalledWith('user_id');
  });

 
});
