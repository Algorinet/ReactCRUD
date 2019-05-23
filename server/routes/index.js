const express = require('express');
require('dotenv');
const router  = express.Router();
const User = require('../models/User');

/* GET home page */

router.get('/getusers', (req, res, next) => {
  User.find({})
    .then(users => {
      res.json(users)
      
      console.log(users)
    })
    .catch(err => {
      res.json({message:'./error', err})
    })
});

router.get('/getusersById/:_id', async (req,res) => {
  const user = await User.findById(req.params._id);
  res.json(user);
})
router.post('/createUsers', async (req,res) => {
  const {name,email,birthDay,street,state,city,country,zip} = req.body;
  const user = new User({
    name,email,birthDay,street,state,city,country,zip
  });
  await user.save();
  console.log(user);
  res.json({status: 'Created OK'});
})

router.put('/updateUsersById/:_id', async (req,res) => {
  const {name,email,birthDay,street,state,city,country,zip} = req.body;
  const newUser = {name,email,birthDay,street,state,city,country,zip};
  await User.findByIdAndUpdate(req.params._id, newUser);
  res.json({status: 'Updated OK'})
})

router.delete('/deleteUsersById/:_id', async (req,res) => {
  await User.findByIdAndRemove(req.params._id);
  res.json({status: 'Deleted OK'})
})


module.exports = router;
