import React, { useState } from 'react';
import axios from "axios"
import {useNavigate} from 'react-router-dom';

function CreateUser() {
const navigate =useNavigate();
    const [inputs,setinputs]=useState({
        name:'',
        email:'',
        phone:''
    })

    const handlechange=(e)=>{
        setinputs({...inputs, [e.target.name]: e.target.value});
        // console.log(inputs)
    }


    const handlesubmit =(e)=>{
        e.preventDefault();
        axios.post('http://localhost:80/api/user/save',inputs).then((response)=>{
            console.log(response);
        })
        navigate('/updateuser');
    }

  return (
    <div>
        <h1>USER INFORMATION</h1>
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

export default CreateUser