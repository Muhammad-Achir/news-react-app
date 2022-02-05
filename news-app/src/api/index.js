function fetchApi (route) {
    return fetch('https://newsapi.org/v2/everything?q=' + route + '&apiKey=c43e1651327a4907bc78c60b25effd98')
}

export default fetchApi