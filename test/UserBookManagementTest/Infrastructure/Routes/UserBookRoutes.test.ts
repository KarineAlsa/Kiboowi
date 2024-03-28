import userBookRouter from '../../../../src/UserBookManagement/Infrastructure/Routes/UserBookRoutes';
import request from 'supertest';
import app from '../../../../src/app'; // Importa tu aplicación Express

describe('UserBookRouter', () => {
  it('responds with status 200 and a list of reading books', async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IkthcmluZSBBbGNhemFyIFNhcm1pZW50byIsInVzZXJuYW1lIjoia2FyaWFsc2EiLCJlbWFpbCI6IjIxMzM0MEBkcy51cGNoaWFwYXMuZWR1Lm14IiwiYmlydGhkYXkiOiIyMDAyLTExLTI5IiwiY3JlYXRlRGF0ZSI6IjIwMjQtMDMtMTgiLCJpYXQiOjE3MTE2MTUwMzYsImV4cCI6MTcxMTYxODYzNn0.3uVdGHjzwbHBlbbFmaRbNH5G0pxujzaylmO4FARkkE4';
    
    const response = await request(app)
      .get('/user-book/reading-books')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe('Libros actuales obtenidos');
    expect(response.body.data).toBeDefined(); 
    expect(Array.isArray(response.body.data)).toBe(true); 
    expect(response.body.data.length).toBeGreaterThan(0); 
  });

  it('responds with status 200 and success message after adding a book', async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IkthcmluZSBBbGNhemFyIFNhcm1pZW50byIsInVzZXJuYW1lIjoia2FyaWFsc2EiLCJlbWFpbCI6IjIxMzM0MEBkcy51cGNoaWFwYXMuZWR1Lm14IiwiYmlydGhkYXkiOiIyMDAyLTExLTI5IiwiY3JlYXRlRGF0ZSI6IjIwMjQtMDMtMTgiLCJpYXQiOjE3MTE2MTUwMzYsImV4cCI6MTcxMTYxODYzNn0.3uVdGHjzwbHBlbbFmaRbNH5G0pxujzaylmO4FARkkE4';

    const response = await request(app)
      .post('/user-book/add-book')
      .set('Authorization', `Bearer ${token}`)
      .send({
        idBook: 2000,
        state: 2,
        bookName: 'nuevo libro',
        authorName: 'nuevo autor',
        imageUrl: 'https://m.media-amazon.com/images/I/61yDbydHNrS._AC_UF1000,1000_QL80_.jpg'
      });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe('Libro añadido');
    expect(response.body.data).toBeDefined();
    expect(response.body.data.idBook).toBe(2000); 
  });  
});

