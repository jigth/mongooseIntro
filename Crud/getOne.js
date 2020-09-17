require('../connection');

const Client = require('../Models/Client');

const getFirst = async () => {
    const firstClient = await Client.findOne();
    console.log(firstClient);
}

const getOne = async (clientId) => {
    const client = await Client.findById(clientId);
    console.log(client)
}

getFirst();