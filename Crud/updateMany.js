require('../connection');

const Client = require('../Models/Client');

// Update every client's full name with a given first name to "Son Goku"
const updateMany = async (firstName) => {
    const updatedClient = await Client.updateMany({
        firstName
    }, { $set: { firstName: "Son", lastName: "Goku" } });
    // Print info about updated clients
    console.log(updatedClient);
}

updateMany("Jane");