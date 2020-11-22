import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Characters from './components/charcters/charcters';
import Header from './components/ui/header/header';
import Search from './components/ui/search/search';
import './App.css'


import logo from './images/logo.png'

const App = () => {
  const [characters, setcharacters] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const [query, setquery] = useState('')


  useEffect(() => {

    const fetchItems = async () => {
      setIsLoading(true)
      const result = await Axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )

      // console.log(result.data)

      setcharacters(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query]);


  return (
    <div className="App">
      <Header logo={logo} alt="logo" />
      <Search getQuery={setquery} />
      <Characters items={characters} isLoading={IsLoading} />
    </div>
  );
}

export default App;
