import { Request, Response } from "express";
import DeleteUserController from "../../../../src/UserManagement/Infrastructure/Controller/DeleteUserController";
import DeleteUserUseCase from "../../../../src/UserManagement/Application/UseCase/DeleteUserUseCase";
import { currentRepository } from "../../../../src/UserManagement/Infrastructure/Dependencies";

describe('AddUserBookController', () => {
    
    const mockUseCase: DeleteUserUseCase = {
        run: jest.fn().mockResolvedValueOnce({}),
        repository: currentRepository
    };

    const controller = new DeleteUserController(mockUseCase);
    
    const mockRequest: Partial<Request> = {
        params: {
            id: '3'
        }
    };
    const mockResponse: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    } as unknown as Response;    


    it('should call useCase.run with correct parameters and return 200 if book is added', async () => {
        
        (mockUseCase.run as jest.Mock).mockResolvedValueOnce(true);
        
        await controller.run(mockRequest as Request, mockResponse as Response);

        expect(mockResponse.status).toHaveBeenCalledWith(200);

    });
    
});
