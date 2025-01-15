import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Read = () => {

  const [email, setEmail] = useState();
  const [data, setData] = useState();

  async function handleSubmit(e){
    e.preventDefault();
    const data = await axios.get("http://localhost:8000/read", {
      params:{email}
    }).then((data)=>{
      console.log("data: ", data.data);
      setData(data.data)
    })
  }

  useEffect(()=>{
    setData(null);
  }, [])

  useEffect(()=>{
    console.log(data); 
  }, [data])


  return (
    <div>
      <form method='get'>
        <input type='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
        {
            data && 
            <div>
              <h3>name: {data.name}</h3>
              <h3>email: {data.email}</h3>
              <h3>room id: {data.roomId}</h3>
              <h3>price: {data.price}</h3>
            </div>
        }
      </form>
    </div>
  )
}

export default Read