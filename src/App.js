import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/cart' element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
