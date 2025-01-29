import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPet = () => {
    const [pet, setPet] = useState({
        name: '',
        breed: '',
        age: '',
        gender: '',
        location: '',
        file: null,
        photo: '', 
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setPet({ ...pet, [e.target.name]: e.target.value });
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) {
            console.error('No file selected');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'pet_photos'); 

        try {
            const response = await axios.post(
                'https://api.cloudinary.com/v1_1/dxinwzvh1/image/upload',
                formData
            );

            setPet({ ...pet, photo: response.data.secure_url });
            console.log(response.data.secure_url);
            console.log('File uploaded successfully:', response.data.secure_url);
        } catch (error) {
            console.error('Error uploading Image:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, breed, age, gender, location, photo } = pet;

        try {
            const response = await axios.post('http://localhost:3000/pet/pets', {
                name,
                breed,
                age,
                gender,
                location,
                photo, 
            });

            if (response.status === 200 || response.status === 201) {
                alert('Pet added successfully!');
                navigate('/'); 
            }
        } catch (error) {
            console.error('Error adding pet:', error);
            alert('Failed to add the pet. Please try again.');
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}
        >
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add a New Post</h2>

            <div style={{ marginBottom: '10px',marginRight:"20px" }}>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={pet.name} 
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '8px', margin: '5px 0', borderRadius: '5px', border: '1px solid #ccc' }}
                />
            </div>

            <div style={{ marginBottom: '10px',marginRight:"20px"  }}>
                <label>Breed:</label>
                <input
                    type="text"
                    name="breed"
                    value={pet.breed} 
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '8px', margin: '5px 0', borderRadius: '5px', border: '1px solid #ccc' }}
                />
            </div>

            <div style={{ marginBottom: '10px',marginRight:"20px"  }}>
                <label>Age:</label>
                <input
                    type="number"
                    name="age"
                    value={pet.age} 
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '8px', margin: '5px 0', borderRadius: '5px', border: '1px solid #ccc' }}
                />
            </div>

            <div style={{ marginBottom: '10px',marginRight:"5px"  }}>
                <label>Gender:</label>
                <select
                    name="gender"
                    value={pet.gender} 
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '8px', margin: '5px 0', borderRadius: '5px', border: '1px solid #ccc' }}
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>

            <div style={{ marginBottom: '10px',marginRight:"20px"  }}>
                <label>Location:</label>
                <input
                    type="text"
                    name="location"
                    value={pet.location} 
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '8px', margin: '5px 0', borderRadius: '5px', border: '1px solid #ccc' }}
                />
            </div>

            <div style={{ marginBottom: '10px',marginRight:"20px"  }}>
                <label>Photo:</label>
                <input
                    type="file"
                    name="file" 
                    onChange={handleFileChange}
                    required
                    style={{ width: '100%', padding: '8px', margin: '5px 0' }}
                />
            </div>

            <button
                type="submit"
                style={{
                    width: '100%',
                    padding: '10px',
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Submit
            </button>
        </form>
    );
};

export default AddPet;
