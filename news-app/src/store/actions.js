import constant from '../constant'

export function setNews(payload) {
    return { type: constant.SET_NEWS, payload }
}

export function fetchNews(route) {
    return function (dispatch) {
        fetch('https://newsapi.org/v2/everything?q=' + route + '&apiKey=c43e1651327a4907bc78c60b25effd98')
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