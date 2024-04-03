import GetUserBook from '../../../../src/UserBookManagement/Application/UseCase/GetUserBookUseCase';
import UserBookInterface from '../../../../src/UserBookManagement/Domain/Port/UserBookInterface';
import { UserBook } from '../../../../src/UserBookManagement/Domain/Entity/UserBook';

describe('GetReadBooksByUserId', () => {
  it('should return a list of books that user has already read', async () => {
    // Arrange
    const expectedUserBooks: UserBook = 
        new UserBook(
            1,
            1,
            1,
            'Book 1',
            'Author 1',
            'image1.jpg'
          )
          
    ;

    const mockRepository: UserBookInterface = {
        searchUserBook: jest.fn().mockResolvedValueOnce(expectedUserBooks),
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
      },
      searchUserReadBooks: function (idUser: string): Promise<any> {
        throw new Error('Function not implemented.');
      }
    };

    const getToReadBooksByUserId = new GetUserBook(mockRepository);

    // Act
    const result = await getToReadBooksByUserId.run(3, 24);
    

    // Assert
    expect(result).toEqual(expectedUserBooks);
    expect(mockRepository.searchUserBook).toHaveBeenCalledWith(3,24);
  });

 
});
