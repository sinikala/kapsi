import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme/theme'
import App from './App'

import activeParkReducer from './state/activePark'
import userReducer from './state/user'
import visitedParksReducer from './state/visitedParks'
import plannedParks from './state/plannedParks'


const store = configureStore({
  reducer: {
    activePark: activeParkReducer,
    user: userReducer,
    visitedParks: visitedParksReducer,
    plannedParks: plannedParks
  }
})

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)

