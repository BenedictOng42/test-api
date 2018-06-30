import connect from '../../mongoDB/connection';


const addSession = async (obj, args) => {
  const db = await connect();

  await db.collection('sessions').insert({ date: args.date, songList: args.songList, notes: args.notes });
  return `Added ${args.notes}`;
};

const updateSession = async (obj, args) => {
  const db = await connect();
  await db.collection('session').update({ ...args });
  return 'updated Session';
};

export default { addSession, updateSession };
