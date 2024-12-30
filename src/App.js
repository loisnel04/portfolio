import './App.css';
import Footer from './Footer';
import Header from './Header';
import Body from './Body';
import Navbar from './Navbar';
//import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div id="header">
        <Header />
      </div>
      <Navbar />
      <div className="separator"></div>
      <Body />
      <div className="separator"></div>
      <Footer />
    </div>
  );
}

export default App;
