const mongoose = require('mongoose');
const User = require('../models/User');

const dbName = 'UsersDB';
mongoose.connect(`mongodb://localhost/${dbName}`);

    const users = [
      {
        "id": 1,
        "name": "Luis Gómez",
        "email": "luisgomez@gmail.com",
        "birthDay": "24/03/84",
        "address": ""
      },
      {
        "id": 2,
        "name": "Luke Smith",
        "email": "lukesmith@gmail.com",
        "birthDay": "28/8/79",
        "address": ""
      },
      {
        "id": 3,
        "name": "Natalia González",
        "email": "nataliagonzalez@gmail.com",
        "birthDay": "24/8/97",
        "address": ""
      }
     
    ]
  
    User.create(users, (err) => {
        if(err) {throw(err)}
        console.log(`Created ${users.length} users`)
        mongoose.connection.close();
    })