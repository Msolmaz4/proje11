import React, { useEffect, useState } from 'react'
import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import {data} from './data'

function App() {

const [para ,setPara] =useState(100)
const [basket,setBasket] =useState([])
const [total,setTotal] =useState()


useEffect(()=>{
  console.log(basket);
},[basket])

const sifirla =()=>{
  setTotal([])

}
  return (
    <div className="App">
     <Header total={total} para={para}/>
     <Cards 
     basket={basket}
     setBasket={setBasket}
     data={data}
     total={total}
     />
     <button onClick={sifirla}>Sifirla</button>
    </div>
  );
}

export default App;
