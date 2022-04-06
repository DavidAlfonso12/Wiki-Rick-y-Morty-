import React from 'react'
import FiltersBTN from '../FiltersBTN';

const Species = ({setPageNumber, setSpecies}) => {
  let species = [
    "Humano",
    "Alienígena",
    "Humanoide",
    "Poopybutthole",
    "Mitológico",
    "Desconocido",
    "Animal",
    "Enfermedad",
    "Robot",
    "Cronenberg",
    "Planeta",
  ];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Species
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body d-flex flex-wrap gap-3">
        {species.map((items, index)=>(
            <FiltersBTN task={setSpecies} setPageNumber={setPageNumber} key={index} name="species" index={index} items={items}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Species