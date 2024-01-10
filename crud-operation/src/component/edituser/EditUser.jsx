import React, { useState,useEffect } from 'react';
import axios from "axios"
import {useNavigate, useParams} from 'react-router-dom';

function EditUser() {

  const {id}=useParams();
const navigate =useNavigate();
    const [inputs,setinputs]=useState({
     
    })
    useEffect(()=>{
      getusers();
    },[])
    
    const getusers=()=>{
      axios.get(`http://localhost:80/api/user/${id}/edit`).then((response)=>{
        console.log(response.data);
        setinputs(response.data);
      })}
    const handlechange=(e)=>{
        setinputs({...inputs, [e.target.name]: e.target.value});
        // console.log(inputs)
    }


    const handlesubmit = (e) => {
      e.preventDefault();
      axios.put(`http://localhost:80/api/user/${id}/edit`, inputs)
        .then((response) => {
          console.log(response);
          navigate('/updateuser');
        })
        .catch((error) => {
          console.error(error);
          // Handle error if needed
        });
    };
    

  return (
    <div>
        <h1>Edit user</h1>
        <form action="" onSubmit={handlesubmit}>
            <table cellSpacing='10'>
                <tbody>
                    <tr>
                        <th> <label htmlFor="name">Name</label> </th>
                        <td> <input type="text" name='name' placeholder='Name' value={inputs.name}  onChange={handlechange}/> </td>
                    </tr>
                    <tr>
                        <th> <label htmlFor="email">Email</label> </th>
                        <td> <input type="email" name='email' placeholder='Email' value={inputs.email}  onChange={handlechange}/> </td>
                    </tr>
                    <tr>
                        <th> <label htmlFor="phone">Phone</label> </th>
                        <td> <input type="text" name='phone' placeholder='Phone'  value={inputs.phone} onChange={handlechange}/> </td>
                    </tr>
                    <tr >
                        <th></th>
                        <td><button type='submit' >Save</button></td>
                        </tr>
                </tbody>
            </table>
        </form>
    </div>
  )
}

export default EditUser;