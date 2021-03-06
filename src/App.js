import React, { useState, useEffect } from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from './componets/Filters/Filters';
import Cards from './componets/Cards/Cards';
import Pagination from './componets/Pagination/Pagination';
import Search from './componets/Search/Search';

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  let [fetchedData, updateFetchedDate] = useState([]);
  let { info, results} = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(()=>{
    (async function(){
      let data = await fetch(api).then((res) => res.json());
      updateFetchedDate(data);
    })()

  },[api]);
  return (
    <div className="App">
      <h1 className='text-center  my-4'>
        Rick and Morty <span className='text-primary'>wiki</span> 
      </h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch}/>
      <div className='container'>
        <div className='row'>
          <Filters setSpecies={setSpecies} setGender={setGender} setStatus={setStatus} setPageNumber={setPageNumber}/>
          <div className='col-8'>
            <div className='row'>
              <Cards results={results}/>
            </div>
          </div>
        </div>
      </div>
      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </div>
  );
}

export default App;
