import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
const [data,setData] = useState([])


useEffect(() =>{
  const getRequest = async() =>{
  const response  =  await axios.get(`https://pokeapi.co/api/v2/pokemon/?pages=&limit=10`)
  setData(response.data.results)
  console.log(response.data);
}

getRequest()

},[])

  return (
    <>
    {data.map((pokemon, index) => (
      <div key={index}>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.url} alt='img' />
      </div>
    ))}
  </>
  )
}

export default App
