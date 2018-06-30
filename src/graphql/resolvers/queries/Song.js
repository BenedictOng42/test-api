import connect from '../../mongoDB/connection';

const getAllSongs = async (obj, args) => {
  const db = await connect(); 
  return db.collection('sessions').distinct('songList');
};

export default {getAllSongs};