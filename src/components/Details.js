import React from 'react';
import '../scss/Details.scss';
import { useState, useEffect} from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';

const API = "https://63ef9746c59531ccf172eaee.mockapi.io/my_contacts"


function Details() {

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

  return (
    <div className="details-container">
        <div className="header">
            <h1>My Contacts</h1>
        </div>
        <div className="details-info">
            <div className="name_surname">
                <h1>{name} {surname}</h1>
            </div>
            <div className="address">
                <h2>Address:</h2>
                <h3>{street}</h3>
                <h3>{zipcode}</h3>
                <h3>{town}</h3>
            </div>
            <div className="other">
                <h3>Mobile: {mobile}</h3>
                <h3>Email: {email}</h3>
            </div>
            <div className="button">
            <Link to="/"><button className="btn">Back</button></Link>
            </div>
        </div>
    </div>
  );
}

export default Details;