const supertest = require('supertest');

const app = require('../../src/app');

const TaskModel = require('../../src/app/models/Task');

const request = supertest(app);

describe('Task', () => {
  it('should be able to create task', async () => {
    const response = await request.post('/tasks').send({
      title: 'taskTitle',
      description: 'taskDescription',
    });

    expect(response.status).toBe(200);
  });

  it('should be able to delete task', async () => {
    const task = new TaskModel({
      title: 'existsTaskTitle',
      description: 'existsTaskDescription',
    });

    await task.save();

    const response = await request.delete('/tasks').send({
      id: task._id,
    });

    expect(response.status).toBe(200);
  });
});
