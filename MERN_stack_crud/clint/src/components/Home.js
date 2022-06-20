import React, { useEffect, useState } from 'react'
import { Form,Table } from 'react-bootstrap';
import Axios from 'axios';

export default function Home() {

    const [name,setName]=useState('');
    const [age,setAge]=useState(0);
    const [listOfFriends,setListOfFriends]=useState([]);

    const addFriend=()=>{
        Axios.post('http://localhost:3001/addfriend',{
            name:name,
            age:age,
        })
    }

    useEffect(()=>{
        Axios.get("http://localhost:3001/read").then((response)=>{
            setListOfFriends(response.data);
        }).catch(()=>{
            console.log("Error !");
        })
    },[]);

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
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
        <Table className='striped bordered hover'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
            </tr>
          </thead>
          <tbody>

          {
              listOfFriends.map((value)=>
              <tr key={value._id}>
                <td>{value._id}</td>
                <td>{value.name}</td>
                <td>{value.age}</td>
                {/* <td><Link to={"/contactUpdate/"+value.id}><button className='btn btn-info'>Edit</button></Link> <button onClick={()=>{deleteData(value.id)}} className='btn btn-danger'>Delete</button></td> */}
              </tr>
              )
          }

          </tbody>
        </Table>
                </div>
                <div className='col-md-3'></div>
            </div>
        </div>
    </div>
  )
}
