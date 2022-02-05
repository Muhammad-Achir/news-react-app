import { useState, useEffect } from "react"
import ListNews from "../components/ListNews"
import { useDispatch, useSelector } from 'react-redux'

import { fetchNews } from "../store/actions"

import "./Home.css"

function Home(props) {
    const dispatch = useDispatch()
    const news = useSelector(state => state.news)

    // const [news, setNews] = useState([])

    // useEffect(() => {
    //     fetch('https://newsapi.org/v2/everything?q=*&apiKey=c43e1651327a4907bc78c60b25effd98')
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('error response')
    //             }
    //             return response.json()
    //         })
    //         .then(data => {
    //             // console.log(data)
    //             setNews(data.articles)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }, [])

    useEffect(() => {
        dispatch(fetchNews("*"))
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

export default Home