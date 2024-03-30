import { Request, Response } from "express";
import GetToReadBooksController from "../../../../src/UserBookManagement/Infrastructure/Controller/GetToReadBooksController";
import GetToReadBooksUseCase from "../../../../src/UserBookManagement/Application/UseCase/GetUserToReadBooksUseCase";
import { currentRepository } from "../../../../src/UserBookManagement/Infrastructure/Dependencies";

const mockUseCase: GetToReadBooksUseCase = {
    run: jest.fn(),
    userRepository: currentRepository
};


const controller = new GetToReadBooksController(mockUseCase);


const mockRequest: Partial<Request> = {
    params: {
        id: '3'
    }
};
const mockResponse: Partial<Response> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
} as unknown as Response;

describe('GetReadingBooksController', () => {
    it('should return 200 with books data when a valid ID is provided', async () => {
        
        const mockResult = [
            {
                id: 24,
                idBook: 24,
                idUser: 3,
                state: 2,
                bookName: "El arte de la guerra",
                authorName: "Sun Tzu",
                imageUrl: "https://www.oceano.mx/img/obra/media/19196.jpg"
            },
            {
                id: 25,
                idBook: 25,
                idUser: 3,
                state: 2,
                bookName: "El libro de la selva",
                authorName: "Rudyard Kipling",
                imageUrl: "https://m.media-amazon.com/images/I/912jSVZE5LL._AC_UF894,1000_QL80_.jpg"
            },
           
        ];

        (mockUseCase.run as jest.Mock).mockResolvedValueOnce(mockResult);

        
        await controller.run(mockRequest as Request, mockResponse as Response);

        
        expect(mockResponse.status).toHaveBeenCalledWith(200);
        expect(mockResponse.json).toHaveBeenCalledWith({
            data: mockResult,
            message: "Libros por leer obtenidos",
            success: true
        });
    });
});