import React, { Component } from 'react';
import { connect } from 'react-redux';

//   This Component using for Edit Emp detail 

class EditEmployee extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newempSalary = this.getempSalary.value;
//   const newEmpId = this.getEmpId.value;
  const newEmpName = this.getEmpName.value;
  const newempAdd = this.getAdd.value;
  const data = {
    newempSalary,
    // newEmpId,
    newEmpName,
    newempAdd
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
}
render() {
return (
<div key={this.props.post.id} className="post">
  <form className="form" onSubmit={this.handleEdit}>
  {/* <input required type="text" ref={(input) => this.getEmpId = input}
    defaultValue={this.props.post.empId} placeholder="Enter Id" /><br /><br /> */}
    <input required type="text" ref={(input) => this.getEmpName = input}
    defaultValue={this.props.post.empName} placeholder="Update Emp Name" /><br /><br /> 

    <textarea required rows="5" ref={(input) => this.getAdd = input}
    defaultValue={this.props.post.empAdd} cols="28" placeholder="Update Address" /><br /><br />

    <input required type="text" ref={(input) => this.getempSalary = input}
    defaultValue={this.props.post.empSalary} placeholder="Update Salary" /><br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}
export default connect()(EditEmployee);