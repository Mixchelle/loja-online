const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const userRoutes = require('./routes/userRoutes');
const resolvers = require('./resolvers'); 
const schema = require('./schema');

const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Servidor  está funcionando!');
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers, 
  graphiql: true, 
}));

app.use('/api/user', userRoutes);

module.exports = app;
