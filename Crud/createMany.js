require('../connection');

const Client = require('../Models/Client');

const createMany = async (listOfClients) => {
    await Client.create(listOfClients);
}

const newClients = [
    {
        firstName: "Jane",
        lastName: "Doe",
        id: "66112225"
    },
    {
        firstName: "Bernard",
        lastName: "Jackson",
        id: "1122225"
    },
    {
        firstName: "Speedy",
        lastName: "Gonzales",
        id: "43211234"
    }
]

createMany(newClients);