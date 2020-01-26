import React, { Component } from 'react';
import EmployeeForm from './EmployeeForm';
import AllEmployee from './AllEmployee';
//import 'bootstrap/dist/css/bootstrap.min.css';

//  This Component using Colabrate our whole application

class App extends Component {
render() {
return (
<div className="App">
  <div className="navbar">
    <h2 className="center ">Employee Management</h2>
    </div>
    <EmployeeForm />
    <AllEmployee />
</div>
);
}
}
export default App;