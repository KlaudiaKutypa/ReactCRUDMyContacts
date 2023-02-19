import React from 'react';
import '../scss/Home.scss';
import { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';

const API = "https://63ef9746c59531ccf172eaee.mockapi.io/my_contacts"


function Home() {

    const [contact, setContact] = useState([]);
    const [refresh, setRefresh] = useState(Math.random())
    const navigate = useNavigate();

    const handleGet = () => {
        fetch(`${API}`)
        .then((response) => response.json())
        .then((data) => setContact(data))
    }

    useEffect (() => {
        handleGet();
    },[refresh])

    const handleDelete = (id) => {
        fetch(`${API}/${id}`, {
            method: "DELETE",
        })
        .then((response) => response.json())
        .then((data) => setRefresh(data))
    }

    const handleEdit = (id) => {
        navigate("/edit/" + id)
    }

    const handleDetails = (id) => {
        navigate("/details/" + id)
    }

  return (
    <div className="home-container">
      <div className="header">
        <h1>My Contacts</h1>
      </div>
      <div className="nav-btns">
        <Link to="/add"> <button>Add Contact</button> </Link>
      </div>
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {contact.map((item) => (
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.mobile}</td>
                <td>{item.email}</td>
                <td>
                    <button onClick={()=> handleDetails(item.id)}>Details</button>
                    <button onClick={()=> handleEdit(item.id)}>Edit</button>
                    <button onClick={()=> handleDelete(item.id)}>Delete</button>
                </td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;