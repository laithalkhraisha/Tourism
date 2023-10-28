const userModel = require('../Model/userModel');

class UserController {
  async addUser(req, res) {
    try {
      const { fullname, email, password } = req.body;
      const user = await userModel.addUser(fullname, email, password);
      res.json(user);
    } catch (error) {
      if (error.constraint === 'users_email_key') {
        console.error('Error adding user: Email already exists');
        res.status(400).json({ error: 'Email already exists' });
      } else {
        console.error('Error adding user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  }

  async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      const user = await userModel.loginUser(email, password);
      res.json(user);
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = new UserController();
