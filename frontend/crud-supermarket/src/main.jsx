import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './Pages/App.jsx'

import { ThemeProvider } from 'styled-components'
import theme from './Styles/theme.js'
import GlobalStyles from './Styles/global.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
    <GlobalStyles />
       <App />
    </ThemeProvider>
  </React.StrictMode>,
)
