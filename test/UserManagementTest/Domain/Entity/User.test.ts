// tests/domain/entities/book.test.js
import { User  } from '../../../../src/UserManagement/Domain/Entity/User';

describe('User', () => {
  it('should create a new user', () => {
    // Arrange
    const name = "kari";
    const username = "kari";
    const email = "algo@hotmail.com";
    const password = "kari";
    const birthdayDate = '1999-11-11';
    const createdAt = '2024-04-01';
    

    // Act
    const user = new User(name ,username, email, password, birthdayDate, createdAt);

    // Assert
    expect(user).toBeDefined();
    expect(user.name).toEqual(name);
    expect(user.username).toEqual(username);
    expect(user.email).toEqual(email);
    expect(user.password).toEqual(password);
    expect(user.birthdayDate).toEqual(birthdayDate);
    expect(user.createdAt).toEqual(createdAt);

  });

});
