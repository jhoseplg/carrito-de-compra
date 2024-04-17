import React from 'react'
import ReactDOM from 'react-dom/client'
import { Principal } from './Principal'
import { AppContext } from './context/AppContext'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContext>

    <React.StrictMode>
      <Principal />
    </React.StrictMode>

  </AppContext>
)