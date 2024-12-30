import './App.css';
import Footer from './Footer';
import Header from './Header';
import Body from './Body';
import Navbar from './Navbar';
import { BrowserRouter as Routers, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <div id="separator"></div>
      <Navbar />
      <div id="separator"></div>
      <Body />
      <div id="separator"></div>
      <Footer />
    </div>
  );
}

export default App;
