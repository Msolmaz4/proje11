import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { data } from '../data'


const Cardl = ({item,basket,setBasket}) => {

const addEkle=()=>{


    const checkBa = basket.find(xy=>xy.id === item.id)

    if(checkBa){
        checkBa.amount += 1
        setBasket([...basket.filter(i=>i.id !== item.id),checkBa])
    }else{
        setBasket([
            ...basket,{
                id:item.id,
                amount:1
            }
        ])
    }

}

const removeBasket=()=>{

    const removeFind =basket.find(xz=>xz.id === item.id)
    removeFind.amount -=1
    if(removeFind === 0){
        setBasket([...basket.filter(xz=>xz.id !== item.id)])
    }
    else
    {
     setBasket([...basket.filter(xz=>xz.id !==item.id),{
        id:item.id,
        amount:removeFind.amount  
     }])
    }
}


  return (
    <div className='card'>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item.img} />
  <Card.Body>
    <Card.Title>{item.name}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <div>${item.price}</div>
    <Button variant="primary" onClick={removeBasket}>cikar</Button>
    <span className='amount'>0</span>
    <Button variant="primary" onClick={addEkle}>ekle</Button>
  </Card.Body>
</Card>


    </div>
  )
}

export default Cardl