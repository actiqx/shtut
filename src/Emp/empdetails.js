import React, { Component } from "react";
import Axios from "axios";

class Empdetails extends Component {
  state = {
    selectedEmp: {},
  };
  componentDidMount() {
    Axios.get(
      `http://localhost:3001/employees/${this.props.match.params.id}`
    ).then((res) => this.setState({ selectedEmp: res.data }));
  }
  onUpdateHandler = () => {
    Axios.put(
      `http://localhost:3001/employees/${this.props.match.params.id}`,
      this.state.selectedEmp
    ).then((res) => {
      if (res.status === 200) {
        this.props.history.push("/");
      }
    });
  };
  onChangeHandler = (event) => {
    console.log(event.target.value, event.target.id);
    //this.setState({ selectedEmp: { employee_name: event.target.value } });
    this.setState({
      selectedEmp: {
        ...this.state.selectedEmp,
        [event.target.id]: event.target.value,
      },
    });
  };
  render() {
    return (
      <div>
        <div>Emp Details</div>
        <hr />
        <table>
          <tr>
            <td>Name</td>
            <td>
              <input
                id="employee_name"
                type="text"
                value={this.state.selectedEmp.employee_name}
                onChange={this.onChangeHandler}
              />
            </td>
          </tr>
          <tr>
            <td>Salary</td>
            <td>
              <input
                id="employee_salary"
                type="text"
                value={this.state.selectedEmp.employee_salary}
                onChange={this.onChangeHandler}
              />
            </td>
          </tr>
          <tr>
            <td>Age</td>
            <td>
              <input
                id="employee_age"
                type="text"
                value={this.state.selectedEmp.employee_age}
                onChange={this.onChangeHandler}
              />
            </td>
          </tr>
        </table>
        <button onClick={this.onUpdateHandler}>Update</button>
      </div>
    );
  }
}

export default Empdetails;
