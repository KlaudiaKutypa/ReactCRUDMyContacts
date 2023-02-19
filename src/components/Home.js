import React from 'react';
import '../scss/Home.scss';
import { useState, useEffect } from 'react';

const API = "https://63ef9746c59531ccf172eaee.mockapi.io/my_contacts"


function Home() {

    const [contact, setContact] = useState([])

    const handleGet = () => {
        fetch(`${API}`)
        .then((response) => response.json())
        .then((data) => setContact(data))
    }

    useEffect (() => {
        handleGet();
    },[])


  return (
    <div className="home-container">
      <div className="header">
        <h1>My Contacts</h1>
      </div>
      <div className="nav-btns">
        <button>Add Contact</button>
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
                <td>+{Math.random().toFixed(2)*100}  {item.mobile}{Math.ceil(Math.random()* 10000000)}</td>
                <td>{item.email}</td>
                <td>
                    <button>Details</button>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;