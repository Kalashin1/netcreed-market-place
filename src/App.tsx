import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Index from "./pages/Index";
import Category from './pages/Category';
import ProductPage from './pages/Product-Page';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import Tracking from './pages/Tracking';
import Contact from './pages/Contact';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={(<Index />)} />
        <Route path='/category' element={(<Category />)} />
        <Route path='/product' element={(<ProductPage />)} />
        <Route path='/checkout' element={(<Checkout />)} /> 
        <Route path='/cart' element={(<Cart />)} />
        <Route path='/tracking' element={(<Tracking />)} />
        <Route path='/contact' element={(<Contact />)} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;