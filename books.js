'use strict';
const mongoose = require('mongoose');

 // res.send('hellllooooo');
 mongoose.connect('mongodb://localhost:27017/books', {useNewUrlParser: true, useUnifiedTopology: true});
 const db = mongoose.connection;
 db.on('error', console.error.bind(console, 'connection error:'));
 db.once('open', function() {
// we're connected!
 console.log('we are connected!');
});
 const BookSchema = new mongoose.Schema({
     title: String,
     Decription:String,
     Email:String
   });

 const Book = mongoose.model('Book', BookSchema);

 const Book1 = new Book({title: 'Silence',Decription:'this is the description',Email:'helloworld@gmail.com' },);
 const Book2 = new Book({title: 'hello world',Decription:'welcome to my react app!',Email:'react@gmail.com' },);
 const Book3 = new Book({title: 'React',Decription:'react is a library in js',Email:'reactjs@gmail.com' },);
 
 Book1.save();
 Book2.save();
 Book3.save();
 let ArrayOfBooks=[Book1,Book2,Book3];
 



let GetBooksData=function(req,res){ 
    res.send(ArrayOfBooks);  
}
module.exports=GetBooksData