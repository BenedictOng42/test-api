import connect from '../../mongoDB/connection';

const getAllSongs = async () => {
  const db = await connect();
  return db.collection('sessions').distinct('songList');
};

const getSong = async (obj, args) => {
  const db = await connect();
  return db.sessions.find({ 'songList.name': args._id }, 'songList');
};

export default { getAllSongs, getSong };
