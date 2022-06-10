import './App.css';
import Navbar from './components/navBar/navBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import React, { useState } from 'react';

function App() {
  const [page, setPage] = useState('list')

  return (
    <div className="App">
      <Navbar cartCount={0}/>
      <button onClick={() => setPage('list')}>Lista</button>
      <button onClick={() => setPage('detail')}>Detalle</button>
      {page === 'list' && <ItemListContainer title='Productos' />}
      {page === 'detail' && <ItemDetailContainer />}
    </div>
  );
}

export default App;
