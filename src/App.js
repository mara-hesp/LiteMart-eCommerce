import './App.css';
import Navbar from './components/navBar/navBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <Navbar cartCount={0}/>
      <ItemListContainer />
    </div>
  );
}

export default App;
