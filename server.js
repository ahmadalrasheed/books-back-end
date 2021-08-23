'use strict';
let express=require('express');
require('dotenv').config();
let axios =require('axios');
let server=express();
const PORT=process.env.PORT
let cors=require('cors');
server.use(cors());
let GetBooksData =require('./books');



server.listen(PORT,()=>{
    console.log(`server listeneing on port ${PORT}`);
})

// localhost:3002/books

server.get('/books',GetBooksData)