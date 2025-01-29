import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';

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
    if(!pet) return <div>Loading...</div>
    

  return (
    <div>
      
    </div>
  )
};

export default PetDetails
