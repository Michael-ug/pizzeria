import React from "react";
import  ReactDOM  from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./views/App.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';
import './views/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
