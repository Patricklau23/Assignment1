/*File name:book.js
Student name: Pak Tak Lau 
Student ID: 301224147   
Date: 19 Oct 2022*/

let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
},
{
    collection: "books"
});

module.exports = mongoose.model('Book', bookModel);