import axios, { isAxiosError } from 'axios';
import React, { use, useEffect, useState } from 'react'

function Create() {

  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    place: '',
    noOfPeople: 0,
    days: 0,
    roomId: 0,
    price: 0
  })

  const [total, setTotal] = useState(0);

  function handleChange(e){
    
    e.preventDefault();
    setUser((prev) => ({...prev, [e.target.name]: e.target.value}));
    console.log(user);
    
  }


  function validateDetails(){
    if(user.name.length<=0 || (user.name[0]>='a' && user.name[0]<='z')) {
      alert("invalid username");
      return 0;
    }

    const regex = /[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.][a-zA-Z0-9]+/g

    if(!user.email.match(regex)){
      alert("invalid email");
      return 0;
    }

    if(user.phone.length!=10){
      alert("phone not valid\n");
      return 0;
    }

    if(user.place.length==0){
      alert("place invalid");
      return 0;
    }

    if(user.noOfPeople<=0){
      alert("invalid noof people");
      return 0;
    }
    if(user.days<=0){
      alert("invalid days");
      return 0;
    }

    if(user.roomId<=0){
      alert("invalid roomid\n");
      return 0;
    }

    if(user.price<=0){
      alert("invalid price")
      return 0;
    }

    return 1;

  }


  async function handleSubmit(e){
    e.preventDefault();

    // if(!validateDetails()){
    //   alert("plz enter valid details")
    // }

   const res = await axios.post('http://localhost:8000/', user)
   console.log("res: ", res);
    
   setTotal(user.days*user.noOfPeople*user.price);
   setTimeout(() => {
      setTotal(0);
   }, 3000);
    setUser({
      name:'',
      email:'',
      phone:'',
      place:'',
      days:0,
      noOfPeople:0,
      price:0,
      roomId:0}
    )
   

  }



  useEffect(()=>{
    console.log(user);

    console.log(total);
    
  },total, user)

  return (
    <div>
      <form method='post'>
        <div>
          <label>name</label>
          <input value={user.name} onChange={handleChange} name='name' id='name'/>
        </div>
        <div>
          <label>email</label>
          <input value={user.email} onChange={handleChange} name='email' id='email'/>
        </div>
        <div>
          <label>phone</label>
          <input value={user.phone} onChange={handleChange} name='phone' id='phone'/>
        </div>
        <div>
          <label>place</label>
          <input value={user.place} onChange={handleChange} name='place' id='place'/>
        </div>
        <div>
          <label>noOfPeople</label>
          <input value={user.noOfPeople} onChange={handleChange} name='noOfPeople' id='noOfPeople'/>
        </div>
        <div>
          <label>days</label>
          <input value={user.days} onChange={handleChange} name='days' id='days'/>
        </div>
        <div>
          <label>roomId</label>
          <input value={user.roomId} onChange={handleChange} name='roomId' id='roomId'/>
        </div>
        <div>
          <label>price</label>
          <input value={user.price} onChange={handleChange} name='price' id='price'/>
        </div>
        <button onClick={handleSubmit}>Submit</button>
        {
          total ? <h2>Your total is {total}</h2> : ""
        }
      </form>
    </div>
  )
}

export default Create