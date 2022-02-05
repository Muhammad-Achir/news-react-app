import './DetailNews.css'

// component for displaying certain content in a full page
function DetailNews (props) {
    const news = props.news
    
    return (
        <div className="container">
            <img className='imageTop' src={news.urlToImage}></img>
            <h2 className='title'>{news.title}</h2>
            <p className='author'>Author {news.author}</p>
            <p className='content'>{news.content}</p>
        </div>
    )
}

export default DetailNews