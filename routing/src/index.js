import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// Hash router is  will nothing just  have #nav 
// memory router  different than every other  router it will actull store  all your borwseing history at memory
// static rotuer is for sevser side rendering to telwher you want to render page