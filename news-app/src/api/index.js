// make reusable fetch api
function fetchApi (route) {
    return fetch('https://newsapi.org/v2/everything?q=' + route + '&apiKey=98755f3040474535a2d88e21182b1753')
}

export default fetchApi