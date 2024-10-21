import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import { Globalstyle } from './GlobalStyle.jsx'
import { ThemeProvider } from 'styled-components'

 const theme={
  colors:{
    containerColor:"hsl(210,24%,8%)",
    paraTextColor:"#f0f0f0",
    heroTextColor:"#aa64f0",
    headerColor:"#30336b",
    bgColor:"#130f40",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    boxshadowSP: "rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px",
  }
 }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Globalstyle/>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
