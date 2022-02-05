import { useState, useEffect } from "react"
import ListNews from "../components/ListNews"

import fetchApi from '../api'

import "./Home.css"

function News(props) {
    const [news, setNews] = useState([])

    function getNews() {
        fetchApi('news')
            .then(response => {
                if (!response.ok) {
                    throw new Error("error response")
                }
                return response.json()
            })
            .then(data => {
                setNews(data.articles)
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        getNews()
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