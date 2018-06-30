const schema = `
  type Session {
    _id: ID!
    date: Date
    songList: [Song]
    notes: String
  }

  type Hello {
    _id: ID!,
  }
`;

export default schema;
