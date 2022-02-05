import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import News from './pages/News';
import Sport from './pages/Sport';
import DetailNews from './components/DetailNews';
import Tech from './pages/Tech';
import Travel from './pages/Travel';

function App() {
  const [ news, setNews ] = useState({})

  function getNews(news) {
    // console.log (news)
    setNews(news)
  }

  return (
    <div className="App">
      <Navbar></Navbar>

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

        <Route exact path='/detail/'>
          <DetailNews news={news}></DetailNews>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
