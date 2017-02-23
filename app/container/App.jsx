import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <table className="table table-condensed">
            <thead>
              <tr>
                <th>Number</th>
                <th>Name</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Hamid</td>
                <td>address 1</td>
              </tr>
              <tr className="success">
                <td>2</td>
                <td>Hamid</td>
                <td>address 1</td>
              </tr>
            </tbody>
          </table>
          <button type="button" className="btn btn-default" aria-label="Left Align">
            <span className="glyphicon glyphicon-align-left" aria-hidden="true"></span>
          </button>

          <button type="button" className="btn btn-default btn-lg">
            <span className="glyphicon glyphicon-star" aria-hidden="true"></span> Hello
          </button>
          <div className="dropdown myDropDown">
            <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Dropdown
            <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App
