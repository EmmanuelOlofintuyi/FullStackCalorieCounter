import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table">
  <thead>
    <tr>
      <td scope="col">Actions</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td ><Link className='btn btn-success mx-2' to={'/viewuser'}>View</Link></td>
    </tr>
    <tr>
      <td ><Link className='btn btn-outline-success mx-2' to={'/edituser'}>Edit</Link></td>
    </tr>
    <tr>
      <td ><Link className='btn btn-danger mx-2' to={'/deleteuser'}>Delete</Link></td>
    </tr>
  </tbody>
</table>
        </div>
    </div>
  )
}
