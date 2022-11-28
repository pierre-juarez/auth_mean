require('dotenv').config();
const { Router } = require('express');
const router = Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken');

router.get('/',(req, res) => {
  res.send("Hello world");
});

router.post('/signUp', async(req, res) => {
  const { email, password } = req.body;
  const newUser = new User({ email, password });
  await newUser.save();
  const token = jwt.sign({ _id: newUser._id},process.env.SECRET);
  res.status(200).json({token})
});

router.post('/signIn', async(req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({email});

  if(!user) return res.status(401).send("The email doesn't exist");
  if(user.password !== password) return res.status(401).send("Wrong password");
  
  const token = jwt.sign({_id: user._id},process.env.SECRET);
  return res.status(200).json({token});
});

module.exports = router;