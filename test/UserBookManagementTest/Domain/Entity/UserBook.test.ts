// tests/domain/entities/book.test.js
import { UserBook  } from '../../../../src/UserBookManagement/Domain/Entity/UserBook';

describe('Book', () => {
  it('should create a new book object', () => {
    // Arrange
    const idBook = 3;
    const idUser = 3;
    const state = 2;
    const bookName = 'Test Book';
    const authorName = 'Test Author';
    const imageUrl = 'https://test.com/image.jpg';

    // Act
    const book = new UserBook(idBook, idUser, state, bookName, authorName, imageUrl);

    // Assert
    expect(book).toBeDefined();
    expect(book.idBook).toEqual(idBook);
    expect(book.idUser).toEqual(idUser);
    expect(book.authorName).toEqual(authorName);
    expect(book.bookName).toEqual(bookName);
    expect(book.imageUrl).toEqual(imageUrl);

  });

});
