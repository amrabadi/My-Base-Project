import React, { Component } from 'react'
import './ModuleList.scss'

class ModuleList extends Component {
  render() {
    return (
      <div className="leftPanel list-group" >
        <a href="#" className="list-group-item active"> Cras justo odio </a>
        <a href="#" className="list-group-item">Dapibus ac facilisis in</a>
        <a href="#" className="list-group-item">Morbi leo risus</a>
        <a href="#" className="list-group-item">Porta ac consectetur ac</a>
        <a href="#" className="list-group-item">Vestibulum at eros</a>
      </div>
    )
  }
}

export default ModuleList
