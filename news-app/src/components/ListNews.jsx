import { Link } from 'react-router-dom'
import DetailNews from './DetailNews'

import './ListNews.css'

function ListNews(props) {
    const news = props.news

    function onClicked() {
        props.getNews(news)
    }

    return (
        <div className="list">
            <img src={news.urlToImage} className="image"></img>
            <div>
                <h5 className="title">{news.title}</h5>
                <p className='desc'>{news.description}</p>
                <Link to='/detail' onClick={onClicked}>
                    <p className='see-more'>See More</p>
                </Link>
            </div>
        </div>
    )
}

export default ListNews