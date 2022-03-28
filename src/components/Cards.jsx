import React from 'react'
import Cardl from './Card'

const Cards = ({data,basket,setBasket}) => {
  return (
    <div>
{
    data.map(item=>(
        <Cardl 
        basket={basket}
        setBasket={setBasket}
        item={item}/>
    ))
}



    </div>
  )
}

export default Cards