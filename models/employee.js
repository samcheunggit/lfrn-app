const mongoose = require('mongoose')
const moment = require('moment');

// Employee Schema
const EmployeeSchema = mongoose.Schema({
  userid: {
    type: String,
    index: { unique: true }
  },
  fullname: {
    type: String
  },
  birthday: {
    type: Date
  },
  gender: {
    type: String
  },
  telno: {
    type: Number
  },
  address: {
    type: String
  },
  profilepic: {
    type: String
  },
  title: {
    type: String
  },
  worktype: {
    type: String
  },
  dateofjoin: {
    type: Date
  },
  ecname: {
    type: String
  },
  ectelno: {
    type: Number
  },
  ecrelation: {
    type: String
  },
  isactive: {
    type: Boolean
  },
  leaveid: {
    type: String
  }
});

// first argument: collection name, second argument: schema
const Employee = module.exports = mongoose.model('employee', EmployeeSchema)
 
module.exports.getEmployeeById = (id, callback)=>{
  Employee.findById(id, callback);
}

// add employee and save it to mongodb
module.exports.addEmployee = (newEmployee, callback)=>{
  
  // generate id for new login user
  newEmployee.userid = new mongoose.mongo.ObjectId();
  newEmployee.leaveid = new mongoose.mongo.ObjectId();
  newEmployee.save(callback);
}

// update employee and save it to mongodb
module.exports.updateEmployee = (updatedEmployee, callback)=>{
  
  console.log("update employe profile pic: "+JSON.stringify(updatedEmployee));
  
// option set new to true, return the modified document rather than the original. defaults to false (changed in 4.0)
  Employee.findByIdAndUpdate(updatedEmployee.id,  updatedEmployee, { new: true }, callback)
}

// delete employee and save it to mongodb
module.exports.deleteEmployee = (employeeId, callback)=>{  
  Employee.findByIdAndRemove(employeeId, callback)
}

// add employee and save it to mongodb
module.exports.getAllEmployees = (callback)=>{
  // exclude __v (version key) from mogoose because dataTable
  // cannot accept number without quote ("__v":0)
  Employee.find({}, callback).select('-__v');
}
