import React, { useState ,useEffect } from 'react'
import Header from './components/Header'
import MoviesList from './components/MoviesList'
import SearchBox from './components/SearchBox'
import './App.css'

const App = () => {
  const [ movies, setMovies ] = useState([])
  const [ searchText, setSearchText ] = useState('')
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=60cffc1e&s=${searchText}`, {
      method: 'GET'
    })
    .then(res => res.json())
    .then(({ Search }) => {
      console.log(Search)
      if(Search){
        setMovies(Search)
      }
    })
  }, [ searchText ])
  return (
    <React.Fragment>
        <Header />
        <SearchBox searchText={ searchText } setSearchText={ setSearchText } />
        <MoviesList movies={ movies } />
    </React.Fragment>
  )
}

export default App