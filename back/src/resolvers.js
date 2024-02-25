const UserService  = require("./services/userService");

const resolvers = {
    userByEmailAndPassword: async ({ email, password }) => {
      console.log("Resolver 'userByEmailAndPassword' sendo chamado.");
      return await UserService.getUserByEmailAndPassword(email, password);
    },
    users: async () => {
      console.log("Resolver 'users' sendo chamado.");
      return await UserService.getAllUsers();
    },
    teste: () => {
      console.log("Resolver 'teste' sendo chamado.");
      return "Teste realizado com sucesso!";
    },
};

module.exports = resolvers;
