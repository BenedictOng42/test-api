const RootQuery = `
  type RootQuery {
    # Retrieve Songs
    getAllSongs: [Song]
  
    # Retrieve Specific Song
    getSong(songName: String): [Song]

    # Retrieve Session
    getSession(sessionId: Int!): Session

  }
`;

export default RootQuery;