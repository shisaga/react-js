import './App.css';
import Nav from './main/Nav';
import About from './main/About';
import Shop from './main/shop';

import { Route, Routes, Link } from "react-router-dom"


export function App() {
  return (
    <>
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
        </ul>
      </nav> */}
      <Nav></Nav>

      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/shop" element={<Shop />} ></Route>
        <Route path ="/shop/:id,:he" element={<Shop />}></Route>
       

      </Routes>
    </>
  );
}

export default App;
