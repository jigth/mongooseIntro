// Import script to start connection with MongoDB database by using Mongoose
require('./connection');

// Import Mongoose models that use defined schemas.
const Product = require('./Models/Product');


// Do few operations with those models

// Create new product
const book = new Product({
    name: "Overcoming Gravity",
    description: "An excelent book about calisthenics and bodyweight exercise programming, it teaches a systematic and effective approach, useful for beginners to advanced in the topic. It also teaches various fundamental topics about exercise and basic physiology of exercise.",
    price: 47.49
});


// Save product by using default mongoose standard (Uncomment to save that product)
// book.save((err, book) => {
//     if (err) console.log(err);
//     console.log(book);
// });


// Create new product
const tv = new Product({
    name: "Samsung TV",
    description: "Version 2022",
    price: 400
});

// Create saving function
const saveTv = async () => {
    const savedTv = await tv.save();
}

// Save Product Asynchronously (Uncomment to save that product)
//saveTv();

// Find saved products
Product.find((err, products) => err ? console.log(err) : console.log(products));

// Find first product in the database
Product.findOne((err, firstProduct) => err ? console.log(err) : console.log(firstProduct));

// Find product whose name is 'Samsung TV'
Product.find({name: 'Samsung TV'}, (err, product) => {
    if (err) { console.log(err); }
    console.log(`Found products that matched your query:\n${product}`);
});
