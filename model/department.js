const mongoose = require('mongoose')

const departmentSchema = new mongoose.Schema({
    name: String,
    /* details:String,*/
    /* course_info:Object,*/
    dept_abbr: String,
    /* lecturers:Array*/
})

module.exports = new mongoose.model('Departments', departmentSchema);