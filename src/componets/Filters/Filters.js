import React from 'react'
import Gender from './category/Gender'
import Species from './category/Species'
import Status from './category/Status'

const Filters = ({setPageNumber, setStatus, setGender, setSpecies}) => {
  let clear=() =>{
    setPageNumber("");
    setStatus("");
    setGender("");
    setSpecies("");
    window.location.reload(false);
  }
  return (
    <div className='col-3'>
      <div className='text-center fs-2 mb-2'>Filter</div>
      <div 
      onClick={clear}
      style={{cursor: "pointer"}} className='text-center text-primary text-decoration-underline mb-4 fs-4'>
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus}/>
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber}/>
        <Gender setGender={setGender} setPageNumber={setPageNumber}/>
      </div>
    </div>
    
  )
}

export default Filters