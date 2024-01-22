
import './App.css';
import Navbar from './components/Navbar';
import Pic from './components/Pic';
import Cermony from './components/Cermony';
import Products from './components/Products';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App container">
      <Navbar />
      <Pic />
      <Cermony/>
      <Products/>
      <Contact/>
    </div>
  );
}

export default App;
