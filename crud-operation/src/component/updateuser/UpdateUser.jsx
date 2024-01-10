import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios  from 'axios'
import "./UpdateUser.css"

function UpdateUser() {
const[crud,setcrud]=useState([]);


useEffect(()=>{
  getusers();
},[])

const getusers=()=>{
  axios.get('http://localhost:80/api/user/',).then((response)=>{
    console.log(response.data);
    setcrud(response.data);
  })
}

const deletedata=(id)=>{
  axios.delete(`http://localhost:80/api/user/${id}/delete`).then(response=>{
    console.log(response.data)
    getusers();
  })
}

  return (
    <div>
      <table className='updatetable'> 
        <tbody>
        <thead>
        <tr>
          <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th style={{marginRight:'20px'}}>Action</th>
          </tr>
        </thead>
          {crud.map((user,key)=>
              <tr key={key}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td className='updatetableeidt'>
              <Link to={`/user/${user.id}/edit`} className='updatetableeidt'>Edit</Link>
              <button onClick={()=> deletedata(user.id)}>Delete</button>
            </td>
          </tr>
            )}
        </tbody>
      </table>
    </div>
  )
}

export default UpdateUser