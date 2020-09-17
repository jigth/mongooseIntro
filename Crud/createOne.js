require('../connection');

const Client = require('../Models/Client');

const createOne = async (firstName, lastName, id) => {
    await Client.create({
        firstName,
        lastName,
        id
    });
}

createOne("John", "Doe", "80111223")
    .catch(err => console.log(err));