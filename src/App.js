import './App.css';
import Footer from './Footer';
import Header from './Header';
import Body from './Body';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="separator"></div>
      <Body />
      <div id="separator"></div>
      <Footer />
    </div>
  );
}

export default App;
