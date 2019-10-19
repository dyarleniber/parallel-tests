const Task = require('../models/Task');

class TaskController {
  async store(req, res) {
    try {
      const task = new Task({
        title: req.body.title,
        description: req.body.description,
      });

      await task.save();

      return res.json(task);
    } catch (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  async delete(req, res) {
    try {
      const task = await Task.findById(req.body.id);

      if (task) {
        await task.remove();
      }

      return res.send();
    } catch (err) {
      return res.status(400).json({ error: 'Task not found' });
    }
  }
}

module.exports = new TaskController();
