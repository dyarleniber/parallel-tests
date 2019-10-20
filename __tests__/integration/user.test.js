const supertest = require('supertest');

const app = require('../../src/app');

const UserModel = require('../../src/app/models/User');

const request = supertest(app);

describe('User', () => {
  it('should be able to create user', async () => {
    const response = await request.post('/users').send({
      name: 'userName',
      email: 'useremail@email.com',
      password: '123123',
    });

    expect(response.status).toBe(200);
  });

  it('should be able to delete user', async () => {
    const user = new UserModel({
      name: 'existsUserName',
      email: 'existsUseremail@email.com',
      password: '123123',
    });

    await user.save();

    const response = await request.delete('/users').send({
      id: user._id,
    });

    expect(response.status).toBe(200);
  });
});
