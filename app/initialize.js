import ReactDOM from 'react-dom'
import React from 'react'
import App from 'container/App'
import 'bootstrap-loader'

document.addEventListener('DOMContentLoaded', () => {
  const el = document.createElement('div')
  el.id = 'app'
  document.body.appendChild(el)
  ReactDOM.render(<App />, el)
})
