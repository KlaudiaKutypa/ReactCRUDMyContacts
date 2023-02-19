import React from 'react';
import '../scss/Add.scss';
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

const API = "https://63ef9746c59531ccf172eaee.mockapi.io/my_contacts"


function Add() {

  const [id, setID] = useState();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState("");
  const [surname, setSurname] = useState("");
  const [street, setStreet] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [town, setTown] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch((`${API}`), {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
            id: id,
            name: name,
            surname: surname,
            street: street,
            zipcode: zipcode,
            town: town,
            mobile: mobile,
            email: email
        })
        }).then((res) => {
            navigate('/');
    })
}

  return (
    <div className="add-container">
      <div className="header">
        <h1>My Contacts</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange = {(e) => setName(e.target.value)}></input>
        <label>Surname:</label>
        <input type="text" value={surname} onChange = {(e) => setSurname(e.target.value)}></input>
        <label>Street:</label>
        <input type="text" value={street} onChange = {(e) => setStreet(e.target.value)}></input>
        <label>Zip code:</label>
        <input type="text" value={zipcode} onChange = {(e) => setZipcode(e.target.value)}></input>
        <label>Town:</label>
        <input type="text" value={town} onChange = {(e) => setTown(e.target.value)}></input>
        <label>Mobile:</label>
        <input type="text" value={mobile} onChange = {(e) => setMobile(e.target.value)}></input>
        <label>Email:</label>
        <input type="text" value={email} onChange = {(e) => setEmail(e.target.value)}></input>
        <button>Submit</button>
        <Link to="/"> <button>Back</button> </Link>
      </form>
  
    </div>
  );
}

export default Add;