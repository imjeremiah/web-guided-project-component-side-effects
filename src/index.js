// 👉 Importing React libs from node_modules folder
import React from 'react'
import { render } from 'react-dom'

// 👉 Importing a React component from another file
import App from './components/App'

// 👉 Importing our styles
import './styles.less'
import { ThemeProvider } from 'styled-components';
import theme from './theme';

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.querySelector('#root')
)
