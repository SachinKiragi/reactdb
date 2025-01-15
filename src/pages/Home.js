import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{display:'flex', gap:'1rem', position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)'}}>
        <Link to="/create">Add customer</Link>
        <Link to="/read">View customer details</Link>
        <Link to="/delete">Delete customer</Link>
        <Link to="/update">Update customer details</Link>
    </div>
  )
}

export default Home