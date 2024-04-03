import DeleteUser from '../../../../src/UserManagement/Application/UseCase/DeleteUserUseCase';
import UserInterface from '../../../../src/UserManagement/Domain/Port/UserInterface';
import { User } from '../../../../src/UserManagement/Domain/Entity/User';

describe('DeletUserUseCase', () => {
  it('should return a message of account deleted succesfully', async () => {
    // Arrange
    

    const mockRepository: UserInterface = {
      registerUser: function (user: User): Promise<any> {
        throw new Error('Function not implemented.');
      },
      login: function (mail: string, password: string): Promise<any> {
        throw new Error('Function not implemented.');
      },
      updateUser: function (id: string, updateFields: any): Promise<any> {
        throw new Error('Function not implemented.');
      },
      searchUserById: function (id: string): Promise<any> {
        throw new Error('Function not implemented.');
      },
      deleteUser: jest.fn().mockResolvedValueOnce('Usuario eliminado')
    };

    const deleteUser= new DeleteUser(mockRepository);

    // Act
    const result = await deleteUser.run('3');
    

    // Assert
    expect(result).toEqual('Usuario eliminado');
    expect(mockRepository.deleteUser).toHaveBeenCalledWith("3");
  });

 
});
