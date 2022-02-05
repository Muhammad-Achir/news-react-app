import fetchApi from '../api'
import constant from './constant'

// add action setter the article to the certain page
export function setNews(payload) {
    return { type: constant.SET_NEWS, payload }
}

// add action to make the pages can get the api
export function fetchNews(route) {
    return function (dispatch) {
        fetchApi(route)
            .then(response => {
                if (!response.ok) {
                    throw new Error('error response')
                }
                return response.json()
            })
            .then(data => {
                // console.log(data)
                dispatch(setNews(data.articles))
            })
            .catch(err => {
                console.log(err)
            })
    }
}