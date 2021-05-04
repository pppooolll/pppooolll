import React from 'react'
import ReactDOM from 'react-dom'
import 'virtual:windi.css'
import App from '@layouts/App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
