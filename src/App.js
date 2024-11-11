import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import {Whishlist } from './pages/Whishlist';
import { AuthLogin } from './pages/AuthLogin';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/wish" element={<Whishlist/>}/>
        <Route path="/auth/login" element={<AuthLogin/>}/>
      </Routes>

    
    </div>
  );
}

export default App;
