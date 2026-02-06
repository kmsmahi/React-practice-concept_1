import { Suspense, useState } from 'react'
import './App.css'
import Users from './users'



function App() {
 
  const fetchUser=fetch('https://jsonplaceholder.typicode.com/users')
  .then((res)=>res.json())
  

  return (
    <>
      
      <h1>Vite + React</h1>   
      <Suspense fallback={<h3>loading...</h3>
      }>
        <Users fetchUser={fetchUser}></Users>
      </Suspense>
      
    </>
  )
}





export default App
