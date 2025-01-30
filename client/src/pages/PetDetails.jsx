import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const PetDetails = () => {
    const { id } = useParams();
    const [pet, setPet] = useState(null);
    const [form, setForm] = useState({
      adopterName: "",
      email:"",
      // phoneNumber:"",
    });
    const navigate = useNavigate();

    useEffect(() => {
      axios
        .get(`http://localhost:3000/pet/pets/${id}`)
        .then((response) => setPet(response.data))
        .catch((error) => console.error("Error Fetching pet Details", error));
    }, [id]);

    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post("http://localhost:3000/pet/applications", {
          ...form,
          petId: id,
        })
        .then(() => {
          alert("Application Submitted Successfully");
          navigate("/");
        })
        .catch((error) => console.error("Error submitting application", error));
    };
    if(!pet) return <div>Loading...</div>;

    const detailsStyle = {
      maxWidth: "500px",  
      margin: "20px auto",
      padding: "20px",
      textAlign:"center",
      border:"1px solid #ddd",
      borderRadius:"8px",
      backgroundColor:"#fff",
      boxShadow:"0 2px 5px rgba(0,0,0,0.1)",
    }

  return (
    <div>
      <div style={detailsStyle}>
        <h1>Pet Adoption Application</h1>
        <img src={pet.photo} alt={pet.name} style={{width:'100%',borderRadius:"8px",marginBottom:"20px"}} 
        />
        <h2>{pet.name}</h2>
        <p>Breed: {pet.breed}</p>
        <p>Age: {pet.age} years</p>
        <p>Location: {pet.location}</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Your Name" 
            style={{  
              width: "100%", 
              padding: "10px", 
              margin: "10px 0", 
              borderRadius: "5px", 
              display: "block", 
              border: "1px solid #ddd"
            }}
            value={form.adopterName}
            onChange={(e) => setForm({ ...form, adopterName: e.target.value })}
            required
          />
          {/* phone was added in mam */}
          <input
            type="email"
            placeholder="Your Email"
            style={{  
              width: "100%", 
              padding: "10px", 
              margin: "10px 0", 
              borderRadius: "5px", 
              display: "block", 
              border: "1px solid #ddd"
            }}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <button
            style={{  
              width: "100%", 
              padding: "10px", 
              margin: "10px 0", 
              borderRadius: "5px", 
              display: "block", 
              border: "1px solid #ddd",
              backgroundColor: "#007bff",
              color: "#fff",
              cursor: "pointer"
            }}
            type='submit'>Submit
            </button>
          </form>
        </div>
    </div>
  );
};

export default PetDetails
