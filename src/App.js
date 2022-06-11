import './App.css';
import Navbar from './components/navBar/navBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [page, setPage] = useState('/')

  return (
    <div className="App">
      <Navbar cartCount={0}/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ItemListContainer title='Productos' />} />
          <Route path='/category/:categoryid' element={<ItemListContainer title='Productos' />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer title='Detalle del Producto'/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
