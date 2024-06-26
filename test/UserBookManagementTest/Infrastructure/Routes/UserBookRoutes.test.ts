import userBookRouter from '../../../../src/UserBookManagement/Infrastructure/Routes/UserBookRoutes';
import request from 'supertest';
import app from '../../../../src/app'; 

describe('UserBookRouter', () => {
  it('responds with status 200 and a list of reading books', async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IkthcmluZSBBbGNhemFyIFNhcm1pZW50byIsInVzZXJuYW1lIjoia2FyaW5lYWxzYSIsImVtYWlsIjoiMjEzMzQwQGRzLnVwY2hpYXBhcy5lZHUubXgiLCJiaXJ0aGRheSI6IjIwMDItMTEtMjkiLCJjcmVhdGVEYXRlIjoiMjAyNC0wMy0xOCIsImlhdCI6MTcxMjExNjgwOCwiZXhwIjoxNzEyMTIwNDA4fQ.v6oy9u9p4n9GMSbFFep7emVdae4OGr-vPU8C8U4u6Ao';
    
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
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IkthcmluZSBBbGNhemFyIFNhcm1pZW50byIsInVzZXJuYW1lIjoia2FyaW5lYWxzYSIsImVtYWlsIjoiMjEzMzQwQGRzLnVwY2hpYXBhcy5lZHUubXgiLCJiaXJ0aGRheSI6IjIwMDItMTEtMjkiLCJjcmVhdGVEYXRlIjoiMjAyNC0wMy0xOCIsImlhdCI6MTcxMjExNjgwOCwiZXhwIjoxNzEyMTIwNDA4fQ.v6oy9u9p4n9GMSbFFep7emVdae4OGr-vPU8C8U4u6Ao';

    const response = await request(app)
      .post('/user-book/add-book')
      .set('Authorization', `Bearer ${token}`)
      .send({
        idBook: 2006,
        state: 2,
        bookName: 'nuevo libro',
        authorName: 'nuevo autor',
        imageUrl: 'https://m.media-amazon.com/images/I/61yDbydHNrS.AC_UF1000,1000_QL80.jpg'
      });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe('Libro añadido');
    expect(response.body.data).toBeDefined();
    expect(response.body.data.idBook).toBe(2006); 
  });  

  it('responds with status 200 and a list of to read books', async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IkthcmluZSBBbGNhemFyIFNhcm1pZW50byIsInVzZXJuYW1lIjoia2FyaW5lYWxzYSIsImVtYWlsIjoiMjEzMzQwQGRzLnVwY2hpYXBhcy5lZHUubXgiLCJiaXJ0aGRheSI6IjIwMDItMTEtMjkiLCJjcmVhdGVEYXRlIjoiMjAyNC0wMy0xOCIsImlhdCI6MTcxMjExNjgwOCwiZXhwIjoxNzEyMTIwNDA4fQ.v6oy9u9p4n9GMSbFFep7emVdae4OGr-vPU8C8U4u6Ao';
    
    const response = await request(app)
      .get('/user-book/to-read-books')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe('Libros por leer obtenidos');
    expect(response.body.data).toBeDefined(); 
    expect(Array.isArray(response.body.data)).toBe(true); 
    expect(response.body.data.length).toBeGreaterThan(0); 
  });

  it('responds with status 200 and a list of read books', async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IkthcmluZSBBbGNhemFyIFNhcm1pZW50byIsInVzZXJuYW1lIjoia2FyaW5lYWxzYSIsImVtYWlsIjoiMjEzMzQwQGRzLnVwY2hpYXBhcy5lZHUubXgiLCJiaXJ0aGRheSI6IjIwMDItMTEtMjkiLCJjcmVhdGVEYXRlIjoiMjAyNC0wMy0xOCIsImlhdCI6MTcxMjExNjgwOCwiZXhwIjoxNzEyMTIwNDA4fQ.v6oy9u9p4n9GMSbFFep7emVdae4OGr-vPU8C8U4u6Ao';
    
    const response = await request(app)
      .get('/user-book/read-books')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe('Libros leídos obtenidos');
    expect(response.body.data).toBeDefined(); 
    expect(Array.isArray(response.body.data)).toBe(true); 
    expect(response.body.data.length).toBeGreaterThan(0); 
  });

  it('responds with status 200 and a meesage of updated', async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IkthcmluZSBBbGNhemFyIFNhcm1pZW50byIsInVzZXJuYW1lIjoia2FyaW5lYWxzYSIsImVtYWlsIjoiMjEzMzQwQGRzLnVwY2hpYXBhcy5lZHUubXgiLCJiaXJ0aGRheSI6IjIwMDItMTEtMjkiLCJjcmVhdGVEYXRlIjoiMjAyNC0wMy0xOCIsImlhdCI6MTcxMjExNjgwOCwiZXhwIjoxNzEyMTIwNDA4fQ.v6oy9u9p4n9GMSbFFep7emVdae4OGr-vPU8C8U4u6Ao';
    
    const response = await request(app)
      .put('/user-book/update-book/24')
      .set('Authorization', `Bearer ${token}`)
      .send({
        initialDate: "2024-03-01",
        finishDate: "2024-03-30",
        notes: "muy buen libro",
        reaction:"emote_happy.png"

      });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe('Libro de usuario actualizado');
    expect(response.body.data).toBe(true);
  });

  it('delete an user', async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6InRlc3QiLCJ1c2VybmFtZSI6InRlc3QiLCJlbWFpbCI6InRlc3QiLCJiaXJ0aGRheSI6IjIwMDMtMTAtMDQiLCJjcmVhdGVEYXRlIjoiMjAyNC0wMy0xOCIsImlhdCI6MTcxMjExODc4MSwiZXhwIjoxNzEyMTIyMzgxfQ.TW4sWA8oFYxOB2zep0TJ16RNrh9V6wRwaftAEGKcDME';
    
    const response = await request(app)
    .delete('/user/delete')
    .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe('Usuario eliminado');
});
  
});