import React from 'react'
import FiltersBTN from '../FiltersBTN'

const Status = ({setPageNumber, setStatus}) => {
  let status = ["Alive", "Dead", "Unknown"]
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Status
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body d-flex flex-wrap gap-3">
          {status.map((items, index)=>(
          <FiltersBTN task={setStatus} setPageNumber={setPageNumber} key={index} name="status" index={index} items={items}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Status