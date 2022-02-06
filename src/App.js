import './App.css';
import { NavBar } from './Components/NavBar';
import { ItemListContainer } from './Components/ItemListContainer';

  
function App() {
  return (
    <>
      <NavBar />
      <div className="App">
      <header className="App-header">
        <ItemListContainer title='ItemListContainer Component' />
      </header>
      </div>
    </>
  );
}

export default App;
