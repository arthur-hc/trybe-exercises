// COM MYSQL
// const connection = require('./connection');

// const add = async (name, brand) => {
//   try {
//     const [
//       result,
//     ] = await connection.query(
//       `INSERT INTO products (name, brand) VALUES (?, ?);`,
//       [name, brand]
//     );

//     return { id: result.insertId, name, brand };
//   } catch (err) {
//     return err;
//   }
// };

// const getAll = async () => {
//   try {
//     const [rows] = await connection.query('SELECT * FROM products');
//     return rows;
//   } catch (err) {
//     return err;
//   }
// };

// const getById = async (id) => {
//   try {
//     const [result] = await connection.query('SELECT * FROM products WHERE id = ?', [id]);
//     if (!result.length) return null
//     return result[0];
//   } catch (err) {
//     return err;
//   }
// };

// const update = async (id, name, brand) => {
//   try {
//     const [updated] = await connection.query('UPDATE products SET name = ?, brand = ? WHERE id = ?', [name, brand, id])
//     if(updated.affectedRows === 0) return err = { message: "Not Found" };
//     return { id, name, brand };
//   } catch (err) {
//     return err;
//   }
// };

// const exclude = async (id) => {
//   try {
//     const product = await getById(id);
//     if (!product) return null;
//     await connection.query('DELETE FROM products WHERE id = ?', [id])
//     return product;
//   } catch (err) {
//     return err;
//   }
// };

// module.exports = { add, getAll, getById, update, exclude };

// COM MONGODB
const connection = require('./connection');
const { ObjectId } = require('mongodb');

const add = async (name, brand) => {
  try {
    const db = await connection();
    const result = await db.collection('products').insertOne({ name, brand });
    console.log(result.insertedId)
    return { id: new ObjectId(result.insertId), name, brand };
  } catch (err) {
    return err;
  }
};

const getAll = async () => {
  try {
    const db = await connection();
    const result = db.collection('products').find().toArray();
    return result;
  } catch (err) {
    return err;
  }
};

const getById = async (id) => {
  try {
    const db = await connection();
    const result = await db.collection('products').findOne(new ObjectId(id));
    return result;
  } catch (err) {
    return null;
  }
};

const update = async (id, name, brand) => {
  try {
    const db = await connection();
    const product = await db.collection('products').findOne(new ObjectId(id));
    if(!product) return err = { message: "Not Found" };
    await db.collection('products').updateOne({ _id: new ObjectId(id)}, { $set: { name, brand } });
    return { id, name, brand };
  } catch (err) {
    return err;
  }
};

const exclude = async (id) => {
  try {
    const db = await connection();
    const product = await db.collection('products').findOne(new ObjectId(id));
    if (!product) return null;
    await db.collection('products').deleteOne({ _id: new ObjectId(id)});
    return product;
  } catch (err) {
    return err;
  }
};

module.exports = { add, getAll, getById, update, exclude };