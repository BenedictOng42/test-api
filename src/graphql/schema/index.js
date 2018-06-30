import RootMutation from './RootMutation';
import RootQuery from './RootQuery';
import Session from './object/Session';
import Song from './object/Song';

const SchemaDefinition = `
 schema {
   query: RootQuery,
   mutation: RootMutation
 }
`;

const ScalarDefinition = `
 scalar Date
 scalar Odd
`;

const typeDefs = [
  SchemaDefinition,
  ScalarDefinition,

  // Types
  Session,
  Song,

  // actions
  RootMutation,
  RootQuery,
];

const customScalarResolvers = {
  // Odd: GraphQLOdd,
  // Date: GraphQLDate,
};

export { typeDefs, customScalarResolvers };
