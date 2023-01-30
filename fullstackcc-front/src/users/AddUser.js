import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
export default function AddUser() {

  let navigate=useNavigate()
  const [user, setUser]=useState({
    name:"",
    email: "",
    dob: "",
    goal:"",
    lifestyle:"",
    weight:""
  });

  const{name, email, dob, goal, lifestyle, weight} = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit= async (e)=>{
    e.preventDefault()
    await axios.post("http://localhost:8080/calorie_counter/addUser",user)
    navigate("/")
  }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
              <h2 className='text-center m-4'>Add User</h2>
              <form onSubmit={(e) => onSubmit(e)}>
              <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>
                  Name
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your name"
                  name="name"
                  onChange={(e) => onInputChange(e)}
                  value={name}
                  
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='Email' className='form-label'>
                  E-mail
                </label>
                <input
                  type={'text'}
                  className='form-control'
                  placeholder='Enter E-mail'
                  name='email'
                  onChange={(e)=>onInputChange(e)}
                  value={email}
                  
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='Dob' className='form-label'>
                  Date of Birth
                </label>
                <input
                  type={'text'}
                  className='form-control'
                  placeholder='Enter YYYY-MM-DD'
                  name='dob'
                  onChange={(e)=>onInputChange(e)}
                  value={dob}
                  
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='Weight' className='form-label'>
                  Weight
                </label>
                <input
                  type={'text'}
                  className='form-control'
                  placeholder='Enter Weight'
                  name='weight'
                  value={weight}
                  onChange={(e)=>onInputChange(e)}
                />
              </div>
              {/* <div className='mb-3'>
                <label htmlFor='Goal' className='form-label'>
                  Goal
                </label>
                <input
                  type={'text'}
                  className='form-control'
                  placeholder='GAIN or LOSE'
                  name='goal'
                  value={goal}
                  onChange={(e)=>onInputChange(e)}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='lifestyle' className='form-label'>
                  Lifestyle
                </label>
                <input
                  type={'text'}
                  className='form-control'
                  placeholder='enter 1, 2, 3, 4, or 5'
                  name='lifestyle'
                  value={lifestyle}
                  onChange={(e)=>onInputChange(e)}
                />
              </div> */}
              <div className='mb-3'>
              <label htmlFor='Goal' className='form-label'>
                  Goal
                </label><br/>
                <select
                name='goal'
                 value={goal}
                 onChange={(e)=>onInputChange(e)}>
                  <option value={"GAIN"}> GAIN </option>
                  <option value={"LOSE"}> LOSE </option>
                </select>
              </div>
              <div className='mb-3'>
              <label htmlFor='Goal' className='form-label'>
                  Lifestyle
                </label><br/>
                <select 
                name='lifestyle'
                value={lifestyle}
                onChange={(e)=>onInputChange(e)}>
                  <option value={1}> Couch Potato </option>
                  <option value={2}> Light </option>
                  <option value={3}> Moderate </option>
                  <option value={4}> Active </option>
                  <option value={5}> Athlete </option>
                </select>
              </div>
              <button type="submit" className='btn btn-outline-success'>Submit</button>
              <button type="submit" className='btn btn-outline-danger mx-2'>Cancel</button>
              </form>
            </div>
        </div>
    </div>
        
  )
}
