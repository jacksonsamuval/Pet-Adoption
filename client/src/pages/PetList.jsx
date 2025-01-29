import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const PetList = () => {

  const [pets,setPets]=useState([]);
  const [locationFilter, setLocationFilter] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    axios
      .get("http://localhost:3000/pet/pets")
      .then((response) => setPets(response.data))
      .catch((error) => console.error("Error Fetching pets",error));
  },[]);


  const handleAdopt = (petId) => {
    navigate(`/pets/${petId}`);
  };

  const filteredPets = pets.filter((pet) => {
    return pet.location.toLowerCase().includes(locationFilter.toLowerCase());
  });

  const listStyle = {
    display: "flex",
    flesWrap: "wrap",
    gap: "20px",
    justifyContent: "center"
  };

  const cardStyle = {
    border:"1px solid #ddd",
    borderRadius:"8px",
    padding:"20px",
    maxWidth:"300px",
    backgroundColor:"#fff"
  }

  return (
    <div>
      <h1 style={{textAlign:'center',color:'#333'}}>Availaible Pets</h1>

      <div style={{ maxWidth: "400px",margin:"20px auto" }}>
        <input
          type="text"
          placeholder="Filter by location"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "100%",
          }}
        />
      </div>

      <div style={listStyle}>
        {filteredPets.map((pet) => (
          <div key={pet._id} style={cardStyle}>
            <h3>{pet.name}</h3>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age}</p>
            <p>Gender: {pet.gender}</p>
            <p>Location: {pet.location}</p>
            <img 
              src={pet.photo} 
              alt={pet.name} 
              style={{ width: "100%", borderRadius:"5px" }} 
            />
            {pet.status === "available" ? (
              <span style={{ color: "green" }}>Adopted</span>
            ) : (
              <button
                onClick={() => handleAdopt(pet._id)}
                style={{
                  padding: "10px",
                  backgroundColor: "#28a745",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  marginTop: "10px",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                Adopt
              </button>
            )}
      </div>
        ))}
    </div>
    </div>
  )
};

export default PetList
