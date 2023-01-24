import React from 'react'
import NameCard from '../NameCard/NameCard'
import './ResultContainer.css'

const ResultContainer=({ suggestedNames})=> {
  const nameSuggestions = suggestedNames.map((item)=>{
    return <NameCard key={item} suggestedName={item}/>
  })
  
  return(
    <div className='result-container'>
        {nameSuggestions}
    </div>
  )
}

export default ResultContainer;