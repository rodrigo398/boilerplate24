import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '@modules/App'
import Providers from '@src/providers'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
)
