import { useState, useEffect } from "react"
import ListNews from "../components/ListNews"
import { useDispatch, useSelector } from 'react-redux'

import { fetchNews } from "../redux/actions"

import "./Home.css"

// component to display news article
function News(props) {
    const dispatch = useDispatch()
    const news = useSelector(state => state.news)

    useEffect(() => {
        dispatch(fetchNews("news"))
    }, [])

    return (
        <div className='container'>
            {
                news.map((news, index) => (
                    <ListNews key={index} getNews={props.getNews} news={news}></ListNews>
                ))
            }
        </div>
    )
}

export default News