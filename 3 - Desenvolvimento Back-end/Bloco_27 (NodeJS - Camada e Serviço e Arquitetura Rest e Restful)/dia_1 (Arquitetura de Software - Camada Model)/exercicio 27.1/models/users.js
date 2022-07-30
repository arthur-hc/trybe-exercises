// COM MONGO
// const connection = require('./connection');

// const { ObjectId } = require('mongodb');

// const createUser = async (firstName, lastName, email, password) => {
//   const db = await connection();
//   const newUser = await db.collection('users').insertOne({ firstName, lastName, email, password });
//   return  {
//     id: newUser.insertedId,
//     firstName,
//     lastName,
//     email
//   };
// };

// const getAllUsers = async () => {
//   const db = await connection();
//   const AllUsers = await db.collection('users').find().toArray();
//   return AllUsers;
// };

// const getUserById = async (id) => {
//   if(!ObjectId.isValid(id)) return null;
//   const db = await connection();
//   const userById = await db.collection('users').findOne(new ObjectId(id));
//   if(!userById) return null;
//   return userById;
// };

// const updateUserById = async (id, firstName, lastName, email, password) => {
//   if(!ObjectId.isValid(id)) return null;
//   const userId = new ObjectId(id);
//   const newUser = { firstName, lastName, email, password };
//   const db = await connection();
//   const updatedUser = await db.collection('users').updateOne({ _id: userId }, { $set: newUser });
//   if(updatedUser.matchedCount === 0) return 0;
//   return  {
//     id: userId,
//     firstName,
//     lastName,
//     email
//   };
// }



// module.exports = {
//   createUser,
//   getAllUsers,
//   getUserById,
//   updateUserById
// }

// COM MYSQL
const connection = require('./connection');


const createUser = async (firstName, lastName, email, password) => {
  const first_name = firstName;
  const last_name = lastName;
  const newUser = await connection.execute('INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES(?, ?, ?, ?)',
  [first_name, last_name, email, password]
  );
  return newUser;
};

const getAllUsers = async () => {
  const [AllUsers] = await connection.execute('SELECT * FROM users');
  return AllUsers;
};

const getUserById = async (id) => {
  if(!id) return null;
  const [userById] = await connection.execute('SELECT * FROM users WHERE id=?', [id]);
  if(!userById) return null
  return userById
};

const updateUserById = async (id, firstName, lastName, email, password) => {
  if(!id) return null;
  const first_name = firstName;
  const last_name = lastName;
  const [updatedUser] = await connection.execute(
    `UPDATE users_crud.users 
    SET first_name=?, last_name=?, email=?, password=? 
    WHERE id=?`, [first_name, last_name, email, password, id]);
  console.log(updatedUser.affectedRows);
  if(Number(updatedUser.affectedRows) === 0) return 0;
  return updatedUser;
}



module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById
}