import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom" 

import Home from './Home';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <div className = "App">
      <Routes>
        <Route path = "/checkout" element = {<Checkout />}>  
        </Route>

        <Route path = "/login" element = {<Login />}>
        </Route>


        <Route path = "/" element = {<Home/>}>
          
        </Route>

      </Routes>
      </div>
    </Router>
  );
}

function Login(){
  return <h1>Welcome to Login Page</h1>
}

export default App;