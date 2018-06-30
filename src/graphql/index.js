import express from 'express';
import bodyParser from 'body-parser';
import { makeExecutableSchema } from 'graphql-tools';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { typeDefs, customScalarResolvers } from './schema';
import resolvers from './resolvers';

const router = express.Router();

const schema = makeExecutableSchema(
  { typeDefs, resolvers: { ...resolvers, ...customScalarResolvers } },
);

router.use('/graphql', bodyParser.json(), graphqlExpress(req => ({ schema, context: req })));

router.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// use your own api
router.get('/', (req, res) => { res.send('TEST BACKEND API'); });

export default router;
