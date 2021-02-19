import './styles.css';

function News(props){
    return(
        <div className="main-link-container">
            <a href={props.link} id="main-link" className="main-link">
                <p>{props.title}</p>
            </a>
        </div>
    );
}

export default News;