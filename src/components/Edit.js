import React from 'react';
import '../scss/Edit.scss';
import {useState, useEffect} from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const API = "https://63ef9746c59531ccf172eaee.mockapi.io/my_contacts"


function Edit() {

  const {contactid} = useParams();

  const [id, setID] = useState();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState("");
  const [surname, setSurname] = useState("");
  const [street, setStreet] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [town, setTown] = useState("");
  const navigate = useNavigate();
 
  useEffect(() => {
    fetch(`${API}/${contactid}`)
    .then((response) => response.json())
    .then((data) => {
        setName(data.name);
        setMobile(data.mobile);
        setEmail(data.email);
        setSurname(data.surname);
        setStreet(data.street);
        setZipcode(data.zipcode);
        setTown(data.town);
    }) 
},[])

const handleUpdate = (e) => {
    e.preventDefault();
    fetch((`${API}/${contactid}`), {
        headers: {
            "Content-Type": "application/json",
        },
        method: "PUT",
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
    <div className="edit-container">
            <div className="header">
        <h1>My Contacts</h1>
      </div>
      <form onSubmit={handleUpdate}>
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
        <button>Update</button>
        <Link to="/"> <button>Back</button> </Link>
      </form>
    </div>
  );
}

export default Edit;