import React from 'react'

const Home = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url('image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", textAlign: "center", margin: "20px 0" }}>
          Welcome to Pet Heaven
        </h1>
        <p style={{ fontSize: "1.5rem", textAlign: "center", marginBottom: "40px", color: "lightgrey" }}>
          Find your furry companion or give a home to pets in need. Explore available pets below.
        </p>
      </div>
    </div>
  )
}

export default Home

