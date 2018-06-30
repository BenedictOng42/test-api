const RootQuery = `
  type RootQuery {

    # Retrieve Songs
    getAllSongs: [Song]
  
    # Retrieve Specific Song
    getSong(_id: ID!): Song

    # Retrieve Session
    getSession(_id: ID!): Session

  }
`;

export default RootQuery;
