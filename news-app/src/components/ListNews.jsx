import { Link } from 'react-router-dom'

import './ListNews.css'

// component to display a collection of articles along with their brief descriptions
function ListNews(props) {
    const news = props.news

    function onClicked() {
        props.getNews(news)
    }

    return (
        <div className="list">
            <img src={news.urlToImage} className="image"></img>
            <div className='item'>
                <h5 className="title">{news.title}</h5>
                <p className='desc'>{news.description}</p>
                <div className='link'>
                    <Link to='/detail' onClick={onClicked}>
                        <p className='see-more'>See More</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ListNews