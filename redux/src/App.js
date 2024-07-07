
import './App.css';
import { Home } from './Home';
import {Login} from "./Login";
import { Contact } from './Contact';
import { Provider } from 'react-redux';
import {  Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { store } from './Store';

function App() {
  return (
    <Provider store={store}> 
    <Router>
      <Link to="/"> home</Link>
      <Link to="/Login"> login</Link>
      <Link to="/Contact">contact</Link>
      <Routes>

<Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/contact" element={<Contact/>}/>

      </Routes>

      
      
    </Router>
    </Provider>
  );
}

export default App;
