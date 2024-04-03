import { Request, Response } from "express";
import GetUserBookController from "../../../../src/UserBookManagement/Infrastructure/Controller/GetUserBookController";
import GetReadBooksUseCase from "../../../../src/UserBookManagement/Application/UseCase/GetUserBookUseCase";
import { currentRepository } from "../../../../src/UserBookManagement/Infrastructure/Dependencies";

const mockUseCase: GetReadBooksUseCase = {
    run: jest.fn(),
    userRepository: currentRepository
};


const controller = new GetUserBookController(mockUseCase);


const mockRequest: Partial<Request> = {
    params: {
        idUser: '3',
        idUserBook: '24'
    }
};
const mockResponse: Partial<Response> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
} as unknown as Response;

describe('GeUserBooksController', () => {
    it('should return 200 with user books data when a valid ID is provided', async () => {
        
        const mockResult = 
            {
                id: 24,
                idBook: 24,
                idUser: 3,
                state: 2,
                bookName: "El arte de la guerra",
                authorName: "Sun Tzu",
                imageUrl: "https://www.oceano.mx/img/obra/media/19196.jpg",
                initialDate: "2021-10-10",
                finishDate: "2021-10-10",
                notes: "Muy buen libro",
                reaction: 'emote_happy.jpg'
            };
        (mockUseCase.run as jest.Mock).mockResolvedValueOnce(mockResult);

        
        await controller.run(mockRequest as Request, mockResponse as Response);

        
        expect(mockResponse.status).toHaveBeenCalledWith(200);
        expect(mockResponse.json).toHaveBeenCalledWith({
            data: mockResult,
            message: "Información del libro obtenido",
            success: true
        });
    });
});
