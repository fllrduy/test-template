import React from 'react'
import ReactDOM from 'react-dom'
import { App } from '@app/components/App'

import '@app/assets/styles/main.css'
import '@app/localization'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
