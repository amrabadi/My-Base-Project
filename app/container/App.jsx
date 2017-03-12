import React, { Component } from 'react'
import ModuleList from '../components/ModuleList'
import ModuleContainer from '../components/ModuleContainer'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="app container-fluid">
          <div className="col-md-3">
            <ModuleList />
          </div>

          <div className="col-md-9">
            <ModuleContainer />
          </div>
      </div>
    )
  }
}

export default App
