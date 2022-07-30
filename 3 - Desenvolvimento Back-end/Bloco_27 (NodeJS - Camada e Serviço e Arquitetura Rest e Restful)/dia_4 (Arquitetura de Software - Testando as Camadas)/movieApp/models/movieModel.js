const mongoConnection = require('./connection');
const {ObjectId} = require('mongodb');

const create = async ({ title, directedBy, releaseYear }) => {
  const moviesCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('movies'));

  const { insertedId: id } = await moviesCollection
    .insertOne({ title, directedBy, releaseYear });

  return {
    id,
  };
};

const getAll = async () => {
  const db = await mongoConnection.getConnection();
  const movies = await db.collection('movies').find().toArray();
  return movies;
}

const getById = async (id) => {
  const db = await mongoConnection.getConnection();
  const movie = await db.collection('movies').findOne({ _id: ObjectId(id) });
  return movie
}

module.exports = {
  create,
  getAll,
  getById
};