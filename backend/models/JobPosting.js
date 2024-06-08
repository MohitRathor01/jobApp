const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    company_Name: {
        type: String,
        required: true,
    },
    Job_Title: {
        type: String, 
        required: true,
    },
Job_Salary: {
        type: String,
        required: true,
    },
    Job_Location: {
        type: String,
        required: true
        
    },
    Job_Exp:{
        type:String,
        required:true

    },
    Job_Opening:{
        type:String,
        default:2
    }
});
const Job = mongoose.model('Job', jobSchema);
module.exports = Job;
