const {MongoClient} = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

async function test() {
    try {
        await client.connect();
        const database = client.db("ue");
        const users = database.collection("collect");
        const query = {name: "Ken"};

        const results = await users.findOne(query);
        console.log(results);


    }finally {
        await client.close();
    }   
}


async function connectToMongo(uri) {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        return client;
    } catch (err) {
        console.log('connect to MongoDB failed')
        console.log(err);
        return err;
    }
}

async function initializeDB(name) {

}


async function insertNewGroup(data) {

}

async function insertNewOrder(data) {

}

async function findGroup(id) {

}

async function findOrders(id) {

}



