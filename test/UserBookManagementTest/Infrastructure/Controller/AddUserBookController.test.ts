import { Request, Response } from "express";
import AddUserBookController from "../../../../src/UserBookManagement/Infrastructure/Controller/AddUserBookController";
import AddUserBookUseCase from "../../../../src/UserBookManagement/Application/UseCase/AddUserBookUseCase";
import { currentRepository } from "../Dependencies";

describe('AddUserBookController', () => {
    
    const mockUseCase: AddUserBookUseCase = {
        run: jest.fn().mockResolvedValueOnce({}),
        repository: currentRepository
    };

    
    const controller = new AddUserBookController(mockUseCase);

    
    const mockRequest: Partial<Request> = {
        body: {
            idBook: 677,
            state: 1,
            bookName: "Book Name",
            authorName: "Author Name",
            imageUrl: "image.jpg"
        },
        params: {
            idUser: '3'
        }
    };
    const mockResponse: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    } as unknown as Response;

    const mockRequest22: Partial<Request> = {
        body: {
            idBook: 677,
            state: 1,
            bookName: "Book Name",
            authorName: "Author Name",
            imageUrl: "image.jpg"
        },
        params: {
            idUser: '3'
        }
    };
    const mockResponse22: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    } as unknown as Response;
    

    it('should return 400 if request body is incomplete', async () => {
        delete mockRequest.body.idBook; 

        await controller.run(mockRequest as Request, mockResponse as Response);

        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.json).toHaveBeenCalledWith({
            message: "Debe completar todos los campos.",
            success: false
        });
    });

    it('should return 400 if request body fields are empty', async () => {
        mockRequest.body.bookName = ""; 

        await controller.run(mockRequest as Request, mockResponse as Response);

        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.json).toHaveBeenCalledWith({
            message: "Debe completar todos los campos.",
            success: false
        });
    });

    it('should call useCase.run with correct parameters and return 200 if book is added', async () => {
       
        const mockBook = { id: 1, ...mockRequest22.body, idUser: mockRequest22.params?.idUser };
        
        (mockUseCase.run as jest.Mock).mockResolvedValueOnce(mockBook);
        
    
        await controller.run(mockRequest22 as Request, mockResponse22 as Response);

        expect(mockResponse22.status).toHaveBeenCalledWith(200);
        
       
    });

   

    
});
