import './styles.css';
import SearchHeader from './SearchHeader';
import SearchBar from './SearchBar';

function SearchArea(){
    return(
        <div id="search-area" className="search-area">
            <SearchHeader />
            <SearchBar />
        </div>
    );
}

export default SearchArea;