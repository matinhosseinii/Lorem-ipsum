
import './App.css';
import Navbar from './components/Navbar';
import Pic from './components/Pic';
import Cermony from './components/Cermony';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Pic />
      <Cermony/>
      <Products/>
    </div>
  );
}

export default App;
