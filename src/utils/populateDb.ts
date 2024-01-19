import * as mongoose from 'mongoose';
import fetch from 'node-fetch';
import data from '../assets/products.json';

export const ProductSchema = new mongoose.Schema({
  brand: String,
  category: String,
  description: String,
  discountPercentage: Number,
  images: [String],
  price: Number,
  rating: Number,
  stock: Number,
  thumbnail: String,
  title: String,
});

const Product = mongoose.model('Product', ProductSchema);

async function getProducts()
{
  return data
  return await (await fetch('https://dummyjson.com/products')).json();
}

let uri = 'mongodb://admin:password@localhost:27017/polyteia-challenge-db';
mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', (error) =>
{
  console.error('Mongoose connection error:', error);
});

db.once('open', async () =>
{
  console.log('Mongoose connected to the database');

  try {
    console.log('Fetching products...');
    let products = getProducts();


    // Uncomment the next line after verifying the fetched data
    console.log('Products fetched:', products);
    console.log('Creating products in the database...');
    await Product.create(products);

    console.log('Database populated successfully.');
  } catch (error) {
    console.error('Error populating the database:', error);
  } finally {
    mongoose.connection.close();
    console.log('connection closed');
  }
});
