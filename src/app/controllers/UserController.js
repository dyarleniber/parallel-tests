const User = require('../models/User');

class UserController {
  async store(req, res) {
    try {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      await user.save();

      return res.json({
        id: user._id,
        name: user.name,
        email: user.email,
      });
    } catch (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findById(req.body.id);

      if (user) {
        await user.remove();
      }

      return res.send();
    } catch (err) {
      return res.status(400).json({ error: 'User not found' });
    }
  }
}

module.exports = new UserController();
