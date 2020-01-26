import React, { Component } from 'react';
import { connect } from 'react-redux';

class EmployeeForm extends Component {

handleSubmit = (e) => {
e.preventDefault();
 const empSalary = this.getempSalary.value;
 const empName = this.getEmpName.value;
 const empId = this.getEmpId.value;
 const empAdd = this.getAdd.value;
 const data = {
  id: new Date(),
  empSalary,
  empName,
  empId,
  empAdd,
  editing: false
 }
 this.props.dispatch({
 type: 'ADD_POST',
 data
 })
 this.getempSalary.value = '';
 this.getEmpName.value = '';
 this.getEmpId.value = '';
 this.getAdd.value = '';
}
render() {
return (
<div className="post-container">
  <h1 className="post_heading">Add Employee</h1>
  <form className="form" onSubmit={this.handleSubmit} >
   <input required type="text" ref={(input) => this.getEmpId = input}
   placeholder="Enter Id" /><br />
   <input required type="text" ref={(input) => this.getEmpName = input}
   placeholder="Enter Name" /><br />
   <textarea required rows="5" ref={(input) => this.getAdd = input}
   cols="28" placeholder="Enter Add" /><br />

   <input required type="text" ref={(input) => this.getempSalary = input}
   placeholder="Enter Salary" /><br />

   <button>Submit</button>
  </form>
</div>
);
}
}
export default connect()(EmployeeForm);