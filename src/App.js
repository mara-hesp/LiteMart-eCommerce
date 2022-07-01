import './App.css';
import Navbar from './components/navBar/navBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { NotificationProvider } from './notification/Notification'

function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer title='Productos' />} />
              <Route path='/category/:categoryId' element={<ItemListContainer title='Productos' />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer title='Detalle del Producto' />} />
              <Route path='/cart' element={<CartContainer title='Tu Carrito'/>} />
              <Route path='/checkout' element={<Checkout title='Checkout' />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
