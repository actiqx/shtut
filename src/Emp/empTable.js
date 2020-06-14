import React, { Component } from "react";
import Axios from "axios";

class EmpTable extends Component {
  state = {
    emplist: [],
  };
  componentDidMount() {
    Axios.get("http://localhost:3001/employees").then((res) =>
      this.setState({ emplist: res.data })
    );
  }
  setSelectedPerson = (emp) => {
    // this.setState({
    //   selectedEmp: emp,
    // });
    this.props.history.push(`/edit/${emp.id}`);
  };
  render() {
    return (
      <div>
        <table>
          <thead>
            <td>Name</td>
            <td>Salary</td>
            <td>Age</td>
            <td>Action</td>
          </thead>
          <tbody>
            {this.state.emplist.map((emp) => (
              <tr>
                <td>{emp.employee_name}</td>
                <td>{emp.employee_salary}</td>
                <td>{emp.employee_age}</td>
                <td>
                  <button
                    onClick={() => {
                      this.setSelectedPerson(emp);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmpTable;
