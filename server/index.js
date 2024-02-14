const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/foodorderdata')

const app = express()
app.use(cors())
app.use(express.json())

// mongoose.connect('mongodb://127.0.0.1:27017/FoodOrderApp')
mongoose.connect('mongodb://127.0.0.1:27017/FoodOrderApp');

app.get('/getUser', (req, res) => {
    console.log('mydata',req.body)
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// app.get('/getUser/:id', (req, res) => {
//         const id = req.params.id;
//         UserModel.findById({_id:id})
//         .then(users => res.json(users))
//         .catch(err => res.json(err))
// })


// app.put('/updateUser/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel.findByIdAndUpdate({_id:id}, {
//         name: req.body.name, 
//         email: req.body.email,
//         age: req.body.age})
//   .then(users => res.json(users))
//   .catch(err => res.json(err))
// })


// app.delete('/deleteUser/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel.findByIdAndDelete({_id: id})
//   .then(res => res.json(res))
//   .catch(err => res.json(err))
// })


app.post("/createUser", (req, res) => {
    console.log('mydata',req.body)
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3000, () => {
    console.log("server is running")
})