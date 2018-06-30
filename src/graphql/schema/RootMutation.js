const RootMutation = `
  type RootMutation {
    
    addSession(date: Date!, songList: [SongInput], notes: String): String

    removeSession(sessionId: Int!): String
  }

`
export default RootMutation;