import './styles.css';
import SearchArea from './SearchArea';
import Footer from './Footer';

function App() {
  return (
    <div>
      <header id="header" className="main-title">
        <h2>Stock Master</h2>
      </header>
      <div id="main-content" className="main-content">
        <SearchArea />
      </div>
        <Footer />
    </div>
  );
}

export default App;
