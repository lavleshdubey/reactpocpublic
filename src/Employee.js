import React, { Component } from 'react';
import { connect } from 'react-redux';
class Employee extends Component {
render() {
return (
<div className="post"> 
   <div className="empListing">
    {/* <p className="post_message">{this.props.post.empId}</p> */}
    <p className="post_message">{this.props.post.empName}</p>
    <p className="post_message">{this.props.post.empAdd}</p>
    <p className="post_message">{this.props.post.empSalary}</p>
  </div>
  <div className="control-buttons">
    <button className="edit"
    onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id })
    }
    >Edit</button>
    <button className="delete"
    onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id })}
    >Delete</button>
  </div>
</div>
);
}
}
export default connect()(Employee);