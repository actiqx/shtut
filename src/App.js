import React, { Component } from "react";
import Axios from "axios";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Empdetails from "./Emp/empdetails";
import EmpTable from "./Emp/empTable";
class App extends Component {
  state = {
    selectedEmp: {},
  };

  // setSelectedPerson = (emp) => {
  //   this.setState({
  //     selectedEmp: emp,
  //   });
  // };
  // onChangeHandler = (event) => {
  //   console.log(event.target.value, event.target.id);
  //   //this.setState({ selectedEmp: { employee_name: event.target.value } });
  //   this.setState({
  //     selectedEmp: {
  //       ...this.state.selectedEmp,
  //       [event.target.id]: event.target.value,
  //     },
  //   });
  // };
  // onUpdateHandler = () => {
  //   const newEmpList = this.state.emplist.map((emp) => {
  //     if (emp.id === this.state.selectedEmp.id) {
  //       emp.employee_name = this.state.selectedEmp.employee_name;
  //       emp.employee_salary = this.state.selectedEmp.employee_salary;
  //       emp.employee_age = this.state.selectedEmp.employee_age;
  //     }
  //     return emp;
  //   });
  //   this.setState({ emplist: newEmpList });
  // };
  render() {
    return (
      <Switch>
        <Route path="/edit/:id" component={Empdetails}></Route>
        <Route path="/" component={EmpTable}></Route>
      </Switch>
    );
  }
}

export default App;
