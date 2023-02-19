import React from 'react';
import '../scss/Home.scss';


function Home() {
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
            <tr>
                <td>Klaudia</td>
                <td>7626228</td>
                <td>klaudia@gmail.com</td>
                <td>
                    <button>Details</button>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Home;