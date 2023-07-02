const mongoose = require('mongoose');

// Define student schema
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    grade: { type: String },
    subjects: [{ type: String }],
});

const teacherSchema = new mongoose.Schema({
    name: String,
    age: Number,
    salary: Number,
    grade: String,
    subject: String
})

// Create the student model
const Student = mongoose.model('Student', studentSchema)
const Teacher = mongoose.model('Teacher', teacherSchema)

// Connect to MongoDB Atlas
const URL = `mongodb+srv://testOne:testpass@testcluster.q63thel.mongodb.net/`

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB Atlas');

    // Create a new student
    const newStudent = new Student({
        name: 'John Doe',
        age: 18,
        gender: 'Male',
        grade: '10th',
        subjects: ['Math', 'Science', 'English'],
    });
    const newStudent2 = new Student({
        name: 'John Boe',
        age: 15,
        gender: 'Male',
        grade: '10th',
        subjects: ['Math', 'Science', 'English'],
    });

    // Save the student to the database
    newStudent.save()
        .then(() => {
            console.log('Student saved successfully');
            mongoose.disconnect();
        })
        .catch((error) => {
            console.error('Error saving student:', error);
            mongoose.disconnect();
        });
    newStudent2.save()
        .then(() => {
            console.log('Student saved successfully');
            mongoose.disconnect();
        })
        .catch((error) => {
            console.error('Error saving student:', error);
            mongoose.disconnect();
        });

}).catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
});
