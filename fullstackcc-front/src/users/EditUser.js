import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function EditUser() {

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
const { name, newEmail, dob, goal, lifestyle, weight } = user;


const onInputChange = (e) => {
  setEmail(e.target.value); 
};

const onChanges = (e) => {
  setUser({ ...user, [e.target.name]: e.target.value });
};

const onGet = async (e)=>{
  e.preventDefault();
  
 await axios.get(`http://localhost:8080/calorie_counter/user/email.${email}`)
  .then(res => {
      console.log(res)
      setUser(res.data)
  }).catch(err => {
      console.log(err)
  })
}

const onSubmit = async (e)=>{
  e.preventDefault();
  
 await axios.put(`http://localhost:8080/calorie_counter/user/${user.id}`, user)
  
}




  return (
    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
       <form onSubmit={(e) => onGet(e)}>
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
            <button type="submit" className='btn btn-outline-success'>Get User</button>
            </div>
            </form>
            <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name='name'
                value={name}
                onChange={(e) => onChanges(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={newEmail}
                onChange={(e) => onChanges(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="DOB" className="form-label">
                Date of birth
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="dob"
                value={dob}
                onChange={(e) => onChanges(e)}
              />
            </div>
            <div className="mb-3">
            <label htmlFor='Weight' className='form-label'>
                  Weight
                </label>
                <input
                  type={'text'}
                  className='form-control'
                  placeholder='Enter Weight'
                  name='weight'
                  value={weight}
                  onChange={(e)=>onChanges(e)}
                />
            </div>
            <div className='mb-3'>
              <label htmlFor='Goal' className='form-label'>
                  Goal
                </label><br/>
                <select
                name='goal'
                 value={goal}
                 onChange={(e)=>onChanges(e)}>
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
                onChange={(e)=>onChanges(e)}>
                  <option value={1}> Couch Potato </option>
                  <option value={2}> Light </option>
                  <option value={3}> Moderate </option>
                  <option value={4}> Active </option>
                  <option value={5}> Athlete </option>
                </select>
              </div>
            <button type="submit" className="btn btn-outline-primary">
              Edit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}
