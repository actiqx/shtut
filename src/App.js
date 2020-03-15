import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './layout/Header';
import SideNav from './layout/SideNav';
class App extends Component {
  state = {
    appName: 'Amac',
    name: '',
  };

  onClickHandler = () => {
    this.setState ({appName: this.state.name});
  };
  onNameChangeHandler = event => {
    this.setState ({name: event.target.value});
  };
  changeNamefromHeader = text => {
    this.setState ({appName: text});
  };
  render () {
    return (
      <React.Fragment>
        <Header
          appName={this.state.appName}
          changeNamefromHeader={this.changeNamefromHeader}
        />

        <div className="row container">
          <div className="col-2">
            <SideNav changeNamefromHeader={this.changeNamefromHeader} />
          </div>
          <div className="col-10">
            <input
              type="text"
              name=""
              id=""
              value={this.state.name}
              onChange={this.onNameChangeHandler}
            />
            {this.state.name}
            <button onClick={this.onClickHandler}>Change Name</button>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default App;
