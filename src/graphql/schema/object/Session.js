const schema = `
  type Session {
    _id: Int!
    date: Date
    songList: [Song]
    notes: String
  }

  type Hello {
    _id: Int!,
  }
`
export default schema;