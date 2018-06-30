const schema = `
  type Song {
    _id: ID!
    name: String!
    author: String!
    created: Date!
    key: String!
  }

  input SongInput {
    _id: ID!
    name: String!
    author: String!
    created: Date
    key: String!
  }
`;

export default schema;
