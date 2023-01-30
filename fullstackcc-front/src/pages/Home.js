import React from 'react'

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
      <td ><button className='btn btn-success mx-2'>View</button></td>
    </tr>
    <tr>
      <td ><button className='btn btn-outline-success mx-2'>Edit</button></td>
    </tr>
    <tr>
      <td ><button className='btn btn-danger mx-2'>Delete</button></td>
    </tr>
  </tbody>
</table>
        </div>
    </div>
  )
}
