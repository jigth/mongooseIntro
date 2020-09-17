const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/OnlineStore';

// Connection to mongodb
mongoose.connect(mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});

// Log message only once when connection was succesful
mongoose.connection.once('open', () => {
    console.log(`Database conected succesfully: ${mongoURI}`);
});

// Log error messages whenever they ocur
mongoose.connection.on('error', (error) => {
    console.log(error);
});
