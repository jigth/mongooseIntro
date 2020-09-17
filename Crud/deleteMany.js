require('../connection');

const Client = require('../Models/Client');

const deleteMany = async (condition) => {
    await Client.deleteMany(condition)
        .then(() => console.log("All clients were deleted"))
        .catch((error) => console.log(error));
}

deleteMany({});