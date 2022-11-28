const { Router } = require('express');
const router = Router();
const User = require('../model/User');

router.get('/',(req, res) => {
  res.send("Hello world");
});

router.post('/signUp', async(req, res) => {
  const { email, password } = req.body;
  const newUser = new User({ email, password });
  await newUser.save();
  console.log("🚀 ~ file: index.js ~ line 8 ~ router.get ~ newUser", newUser)
  res.send('Register user')
});

module.exports = router;