import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import Axios from 'axios';

export default function Home() {

    const [name,setName]=useState('');
    const [age,setAge]=useState(0);

    const addFriend=()=>{
        Axios.post('http://localhost:3001/addfriend',{name:name,age:age}).then(()=>{
            alert("yey, its work");
        }).catch(()=>{
            alert("aww, it didnt work");
        });
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-4'>
                <h2>________ !</h2>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Enter Name</Form.Label>
                    <input className='form-control' type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Enter Age</Form.Label>
                    <input className='form-control' type="number" onChange={(e)=>setAge(e.target.value)} placeholder="Enter Your Age" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <button onClick={addFriend} className='form-control'>Add Friend</button>
                </Form.Group>
            </Form>
            </div>
            <div className='col-md-4'></div>
            <div className='col-md-4'></div>
        </div>
    </div>
  )
}
