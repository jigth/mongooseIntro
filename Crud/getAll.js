require('../connection');

const Client = require('../Models/Client');

const getAll = async () => {
    const clients = await Client.find();
    console.log(clients);
}

getAll();