import axios from 'axios';
import React, { useState, useEffect } from 'react'

import {useParams, useNavigate} from 'react-router-dom'

export default function ViewUser() {
  
    const [user, setUser] = useState({
        name:"",
        email: "",
        dob: "",
        age: "",
        suggestedCalories: "",
        goal:"",
        lifestyle:"",
        weight:""
    });

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };

    const {email}=useParams();

    useEffect(()=>{
        fetch("http://localhost:8080/calorie_counter/user/${email}")
        .then(res=>res.json)
        .then((result)=>{
            setUser(result)
        })
    }, [])
  
    const onSubmit= async (e)=>{
        e.preventDefault()
        const result = await axios.get("http://localhost:8080/calorie_counter/user/${email}",user)
        setUser(result.data)
      }
    return (
    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
        <form onSubmit={(e) => onSubmit(e)}>
        <div className='mb-3'>
            <label htmlFor='Email' className='form-label'>
            E-mail
            </label>
            <input
            type={'text'}
            className='form-control'
            placeholder='Enter E-mail'
            onChange={(e)=>onInputChange(e)}
            value={email}
            name='email'
            />
            <button type="submit" className='btn btn-outline-success'>Submit</button>
            <button type="submit" className='btn btn-outline-danger mx-2'>Cancel</button>
        </div>
        </form>
    <div className='card'>
        <div className='card-header'>
            Details of user id : 
            <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                    <b>Name: </b>
                    {user.name}
                </li>
                <li className='list-group-item'>
                    <b>Email: </b>
                    {user.email}
                </li>
                <li className='list-group-item'>
                    <b>Date of Brith: </b>
                    {user.dob}
                </li>
                <li className='list-group-item'>
                    <b>Age: </b>
                    {user.age}

                </li>
                <li className='list-group-item'>
                    <b>Suggested Calories: </b>
                    {user.suggestedCalories}

                </li>
                <li className='list-group-item'>
                    <b>Goal: </b>
                    {user.goal}

                </li>
                <li className='list-group-item'>
                    <b>LifeStyle: </b>
                    {user.lifestyle}

                </li>
            </ul>
        </div>

    </div>
  </div>
    
  )
}
