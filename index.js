const bodyParser = require('body-parser');
const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(bodyParser.json())

mongoose.connect("mongodb://127.0.0.1:27017/", { useNewUrlParser: true })
    .then(() => console.log('Connected to the server successfully'))
    .catch((err) => console.log(err))

// Create a Schemea
const StudentSchema = mongoose.Schema({
    name: String,
    roll: Number,
    attendence: Boolean,
    subjects: Array
})

// Create a Model
const StudentModel = mongoose.model('StudentModel', StudentSchema)

app.get('/', (req, res) => { res.send('<h1>Success</h1>') })

const shrish = new StudentModel({
    name: "Samarth",
    roll: 215,
    attendence: false,
    subjects: ['kj', 'kjkljk', 'kjkjkj']
})
shrish.save((err, docs) => {
    if (err) throw (err)
    res.send(docs)
})
// app.get('/dumb', (req, res) => {
//     StudentModel.find({ name: 'Shrish' }, (err, docs) => {
//         if (err) throw (err)
//         console.log(docs)
//     })
// })

const find = async () => {
    const data = await StudentModel.findOne({ name: 'Shrish' }, (err, docs) => {
        console.log(docs)
    })
}

find()
app.listen(8080)