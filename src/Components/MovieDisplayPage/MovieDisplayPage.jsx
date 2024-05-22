import Search from "./components/Search";
import SortComponent from "./components/Sort";
import MovieList from "./components/MovieList";
import { useState, useEffect } from "react";
import DetailModal from './components/DetailModal'

const FLIXTER_API_KEY = "5fee43d048e5d3b74886e7e84fd3716c"


function MovieDisplayPage() {


  const [movies, setMovies] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [sort, setSort] = useState('popularity.desc')
  const [query, setQuery] = useState("")
  useEffect(() => {
    getMovies();
  }, [pageNumber, query, sort])

  const getMovies = async () => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${FLIXTER_API_KEY}&sort_by=${sort}&page=${pageNumber}`

    if (query) {
      url = `https://api.themoviedb.org/3/search/movie?api_key=${FLIXTER_API_KEY}&query=${encodeURIComponent(query)}`
    }

    const response = await fetch(url)
    
    const data = await response.json()
    console.log(data)
    if (query || pageNumber === 1) {
      setMovies(data.results)
    }else{
      setMovies(movies => movies.concat(data.results))
    }

  }

  const loadMore = () => {
    setPageNumber(prevPage => prevPage + 1)
  }
  const handleSearch = (searchQuery) => {
    setQuery(searchQuery)
  }
  const handleClear = () => {
    setQuery("")
    setPageNumber(1)
    setMovies([])
  }
  const handleSelect = (m) => {
    setSelectedMovie(m)
  }
  const clearSelectedMovie = () => {
    setSelectedMovie(null)
  }
  const handleSortChange = (e) => {
    setSort(e.target.value)
    setPageNumber(1)
  }

  return (
      <>
      <header className='App-header'>
        <div className='title'>
          <img src="../movie.png"></img>
          <h1>Flixster</h1>
          <img src="../movie.png"></img>
        </div>
        <div className='filters'>
          <Search onSearch={handleSearch} onClear={handleClear} />
          <SortComponent onChange={handleSortChange}/>
        </div>
      </header>

      <body className='App-body'>
        <MovieList moviesList={movies} onSelect={handleSelect}/>
        {selectedMovie? <DetailModal selectedMovie={selectedMovie} onSelect={clearSelectedMovie}/>:''}
      </body>
      <button onClick={loadMore}>Load More</button>
    </>
    );
  }
  
  export default MovieDisplayPage;