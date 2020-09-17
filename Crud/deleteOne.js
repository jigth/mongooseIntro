require('../connection');

const Client = require('../Models/Client');

const deleteOne = async (id) => {
    const client = await Client.findByIdAndDelete({
        id
    });
    console.log(`The client ${client.firstName} ${client.lastName} has been deleted`);
}

deleteOne("80111223");