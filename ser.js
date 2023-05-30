// const mongoose = require('mongoose');

// mongoose.connect("mongodb://127.0.0.1:27017/", { useNewUrlParser: true }).then(() => {
//     console.log('Connected Successfully')
// }).catch((err) => {
//     console.log(err)
// })

// const student = new mongoose.Schema({
//     name: String,
//     rollNo: Number,
//     result: Boolean
// })

// const Student = mongoose.model('Student', student)


// // async function adder() {

// //     const studentOne = Student({
// //         name: "Shrish",
// //         rollNo: 218,
// //         result: true
// //     })

// //     studentOne.save()
// // }

// // adder()

// // const studentOne = Student({
// //     name: "Samarth",
// //     rollNo: 215,
// //     result: false
// // })

// // studentOne.save()

// async function adder() {

//     const studentOne = await Student.find()
//     console.log(studentOne)

//     // studentOne.save()
// }

// adder()

const http = require('http')

const student = {name: "Shrish", age: 20}
const server = http.createServer((req, res) => {

    res.write(student)
    res.end('<h1>Hello World</h1>')
})

server.listen(8000)








