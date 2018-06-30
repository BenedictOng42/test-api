const schema = `
  type Song {
    name: String!
    author: String!
    created: Date!
    key: String!
  }

  input SongInput {
    name: String!
    author: String!
    created: Date
    key: String!
  }
`

export default schema;