import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import News from './pages/News';
import Sport from './pages/Sport';
import Tech from './pages/Tech';
import Travel from './pages/Travel';
import DetailNews from './components/DetailNews';
import Search from './pages/Search'

function App() {
  // state articles
  const [ news, setNews ] = useState({})

  // state query for searching
  const [ search, setSearch ] = useState('')

  // function query to send to search page
  function getSearch (query) {
    setSearch(query)
  }

  // function to set the articles, for show
  function getNews(news) {
    setNews(news)
  }

  return (
    <div className="App">
      <Navbar getSearch={getSearch}></Navbar>

      <Switch>
        <Route exact path='/'>
          <Home getNews={getNews}></Home>
        </Route>

        <Route exact path='/news'>
          <News getNews={getNews}></News>
        </Route>

        <Route exact path='/sport'>
          <Sport getNews={getNews}></Sport>
        </Route>

        <Route exact path='/tech'>
          <Tech getNews={getNews}></Tech>
        </Route>

        <Route exact path='/travel'>
          <Travel getNews={getNews}></Travel>
        </Route>

        <Route exact path='/search'>
          <Search getNews={getNews} search={search}></Search>
        </Route>
        
        <Route exact path='/detail'>
          <DetailNews news={news}></DetailNews>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
