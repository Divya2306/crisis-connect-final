const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/medical_main');
const signup = mongoose.model('signup', {name: String,email: String,age: Number, gender: String, contact: String, address: Number, relativ_contact: Number,password: String});
const signup1={name: "Hrithik",email: "hbhagat2003@gmail.com",age: 20,gender: "male",contact: 9848248901,address: "the vilas, Delhi",relativ_contact: 9984204321,password: "hbhagat123"};
signup.collection.insertOne(signup1, function (err, docs) {
    if (err){ 
        return console.error(err);
    } else {
      console.log("Multiple documents inserted to Collection");
    }
})
