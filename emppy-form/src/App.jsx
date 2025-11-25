// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import { useState, useEffect } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    password: "",
    phone: ""
  });

  const [employees, setEmployees] = useState([]);

  // Load saved data from local storage
  useEffect(() => {
    const savedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(savedEmployees);
  }, []);

  // Handle form input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Save employee data
  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = [...employees, formData];

    setEmployees(newList);
    localStorage.setItem("employees", JSON.stringify(newList));

    setFormData({ name: "", dob: "", email: "", password: "", phone: "" });
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Employee Form</h2>

      <form 
        onSubmit={handleSubmit} 
        style={{
          width: "350px",
          padding: "20px",
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 0 10px #ccc"
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="number"
          name="phone"
          placeholder="Enter Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <button 
          type="submit" 
          style={{
            width: "100%",
            padding: "10px",
            background: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Save Employee
        </button>
      </form>

      <h2 style={{ marginTop: "40px" }}>Employee List</h2>

      <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#222", color: "white" }}>
            <th>Name</th>
            <th>DOB</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>{emp.name}</td>
              <td>{emp.dob}</td>
              <td>{emp.email}</td>
              <td>{emp.password}</td>
              <td>{emp.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "8px",
  marginBottom: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

export default App;
