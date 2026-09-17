const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://admin:phuonghihi221@cluster0.gvzazqg.mongodb.net/ecommerce_lhu?retryWrites=true&w=majority";const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas");
  } catch (err) {
    console.error("❌ Connection error:", err);
  } finally {
    await client.close();
  }
}

run();