require('../connection');

const Client = require('../Models/Client');

const updateOne = async (firstName) => {
    // Update one specific client to "Rambo" and get the updated document
    const updatedClient = await Client.findOneAndUpdate({
        firstName
    }, { $set: { firstName: "Rambo" } }, { new: true});
    // Print updated first name of client
    console.log(updatedClient);
}

updateOne("Jane");