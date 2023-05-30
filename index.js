const express = require('express')
const mongoose = require('mongoose')

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

const shrish = StudentModel({
    name: 'Shrish',
    roll: 218,
    attendence: true,
    subjects: ['OST', 'OS', 'PYTHON', 'ANIMATION', 'KANNADA', 'ENGLISH']
})


shrish.save()
