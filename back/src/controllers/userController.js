const UserService = require('../services/userService');

class UserController {
  // Método para registrar um novo usuário
  async registerUser(req, res) {
    try {
      const { name, email, password } = req.body;
      const newUser = await UserService.createUser({ name, email, password });
      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  // Método para login de usuário
  async getUser(req, res) {
    console.log('chamou o getUser');
    console.log('body:', req.body);
    try {
      const { email, password } = req.body;
   
      
      const user = await UserService.getUserByEmailAndPassword(email, password);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
  async getAllUsers(req, res) {
    console.log('chamando todos os user')
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
  async getUserByEmailAndPassword(req, res) {
    console.log('chamou o getUser');
    console.log('body:', req.body);
    try {
      const { email, password } = req.body;
   
      
      const user = await UserService.getUserByEmailAndPassword(email, password);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
  async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
  // Método para atualizar informações do usuário
  async updateUser(req, res) {
    try {
      const { userId } = req.params;
      const userDataToUpdate = req.body;
      const updatedUser = await UserService.updateUser(userId, userDataToUpdate);
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

module.exports = new UserController();
