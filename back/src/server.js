const app = require('./app');

function start() {
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Servidor GraphQL rodando em http://localhost:${port}/graphql`);
  });
}

module.exports = { start };
