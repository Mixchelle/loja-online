const User = require('../models/userModel');

class UserService {
  async createUser(userData) {
    try {
      const newUser = await User.create(userData);
      return newUser;
    } catch (error) {
      console.error(error);
      throw new Error('Error creating user');
    }
  }
  async getAllUsers() {
    console.log('chamndo getall');
    try {
      const users = await User.findAll(); 
      console.log('users:', users)
      return users; // Retorna a lista de usuários encontrados
    } catch (error) {
      console.error(error);
      throw new Error('Error fetching all users');
    }
  }


  async getUserByEmailAndPassword(email, password) {
    console.log('Email: ', email);
    console.log('Password:', password);
    try {
      const user = await User.findOne({ where: { email, password } });
      return user;
    } catch (error) {
      console.error(error);
      throw new Error('Error finding user');
    }
  }

  async updateUser(userId, userDataToUpdate) {
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        throw new Error('User not found');
      }
      await user.update(userDataToUpdate);
      return user;
    } catch (error) {
      console.error(error);
      throw new Error('Error updating user');
    }
  }
}

module.exports = new UserService();
