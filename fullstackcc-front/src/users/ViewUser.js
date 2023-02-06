import axios from 'axios';
import React, { useState, useEffect } from 'react'

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

    const [email, setEmail] = useState('');
;

    const onInputChange = (e) => {
        setEmail(e.target.value);  
      };

    

    useEffect(()=>{
        
    }, [])
  
    const onSubmit = async (e)=>{
        e.preventDefault();
        
       await axios.get(`http://localhost:8080/calorie_counter/user/email.${email}`)
        .then(res => {
            console.log(res)
            setUser(res.data)
        }).catch(err => {
            console.log(err)
        })
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
            onChange= {(e) => onInputChange(e)}
            value={email}
            
            
            />
            <button type="submit" className='btn btn-outline-success'>Submit</button>
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
