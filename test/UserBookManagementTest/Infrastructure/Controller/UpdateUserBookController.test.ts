import { Request, Response } from "express";
import UpdateUserBookController from "../../../../src/UserBookManagement/Infrastructure/Controller/UpdateUserBookController";
import UpdateUserBookUseCase from "../../../../src/UserBookManagement/Application/UseCase/UpdateUserBookUseCase";
import { currentRepository } from "../../../../src/UserBookManagement/Infrastructure/Dependencies";

describe('UpdateUserBookController', () => {
    
    const mockUseCase: UpdateUserBookUseCase = {
        run: jest.fn().mockResolvedValueOnce({}),
        repository: currentRepository
    };

    
    const controller = new UpdateUserBookController(mockUseCase);

    
    const mockRequest: Partial<Request> = {
        body: {
            initialDate: "2024-03-01",
            finishDate: "2024-03-30",
            notes: "muy buen libro",
            reaction:"emote_happy.png"
            
        },
        params: {
            idUser: '3',
            idUserBook: '24'
        }
    };
    const mockResponse: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    } as unknown as Response;

    const mockRequest22: Partial<Request> = {
        body: {
            initialDate: "2024-03-01",
            finishDate: "2024-03-30",
            notes: "muy buen libro",
            reaction:"emote_happy.png"
            
        },
        params: {
            idUser: '3',
            idUserBook: '24'
        }
    };
    const mockResponse22: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    } as unknown as Response;

    it('should call useCase.run with correct parameters and return 200 if book is added', async () => {
       
        const mockBook = { id: 1, ...mockRequest22.body, idUser: mockRequest22.params?.idUser };
        
        (mockUseCase.run as jest.Mock).mockResolvedValueOnce(mockBook);
    
        await controller.run(mockRequest22 as Request, mockResponse22 as Response);

        expect(mockResponse22.status).toHaveBeenCalledWith(200);
        
       
    });

   

    
});
