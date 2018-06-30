import connect from '../../mongoDB/connection';

const getSession = async (obj, args) => {
  const db = await connect();
  return db.collection('sessions').find(args._id);
};

export default { getSession };
