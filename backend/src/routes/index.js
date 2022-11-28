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

router.get('/tasks',(req, res) => {
  const dataTasks = [
    {
      _id: 1,
      name: "Task 1",
      description: "Lorem ipsum",
      date: "2022-11-28T05:30:29.779+00:00"
    },
    {
      _id: 2,
      name: "Task 2",
      description: "Lorem ipsum",
      date: "2022-11-28T05:30:29.779+00:00"
    },
    {
      _id: 3,
      name: "Task 3",
      description: "Lorem ipsum",
      date: "2022-11-28T05:30:29.779+00:00"
    },
    {
      _id: 4,
      name: "Task 4",
      description: "Lorem ipsum",
      date: "2022-11-28T05:30:29.779+00:00"
    }
  ];
  res.status(200).json(dataTasks);
});

router.get('/private-tasks', validateToken, (req, res) => {
  const dataTasks = [
    {
      _id: 1,
      name: "Task 1",
      description: "Lorem ipsum",
      date: "2022-11-28T05:30:29.779+00:00"
    },
    {
      _id: 2,
      name: "Task 2",
      description: "Lorem ipsum",
      date: "2022-11-28T05:30:29.779+00:00"
    },
    {
      _id: 3,
      name: "Task 3",
      description: "Lorem ipsum",
      date: "2022-11-28T05:30:29.779+00:00"
    },
    {
      _id: 4,
      name: "Task 4",
      description: "Lorem ipsum",
      date: "2022-11-28T05:30:29.779+00:00"
    }
  ];
  res.status(200).json(dataTasks);
});

router.get('/profile',validateToken, (req, res) => {
  res.send(req.userID);
})

module.exports = router;

function validateToken(req, res, next){
  if(!req.headers.authorization) return res.status(401).send("Unauthorized request");
  
  const token = req.headers.authorization.split(" ")[1];

  if(typeof token === 'undefined') return res.status(401).send("Unauthorized request");
  
  const data = jwt.verify(token, process.env.SECRET);
  req.userID = data._id;
  next();
}