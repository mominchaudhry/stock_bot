import './styles.css';
import SearchArea from './SearchArea';

function App() {
  return (
    <div>
      <header id="header" className="main-title">
        <h2>Stock Master</h2>
      </header>
      <div id="main-content" className="main-content">
        <SearchArea />
      </div>
      <footer id="footer" className="footer">
        <div className="col-md-4 footer-item">
            <a id="footer-stock1" href="#"><h2>best stock #1</h2></a>
        </div>
        <div className="col-md-4 footer-item">
            <a id="footer-stock2" href="#"><h2>best stock #2</h2></a>
        </div>
        <div className="col-md-4 footer-item">
            <a id="footer-stock3" href="#"><h2>best stock #3</h2></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
