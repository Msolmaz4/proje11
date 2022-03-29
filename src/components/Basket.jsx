
import React from 'react'
import { NavItem } from 'react-bootstrap'

const Basket = ({basket}) => {
  return (
    <div>
<h2>basket</h2>

{
    basket.map(it=>(
        <div>{it.id}</div>
            
        
    ))
}

    </div>
  )
}

export default Basket