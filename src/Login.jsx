// // // // // // // import React, { useState } from 'react';
// // // // // // // import { useNavigate } from 'react-router';
// // // // // // // import { Toaster } from 'react-hot-toast';
// // // // // // // import './Login.css'; 

// // // // // // // const Login = () => {
// // // // // // //   const [userEmail, setUserEmail] = useState("johndoe@example.com");
// // // // // // //   const [userpassword, setUserPassword] = useState("Password123!");
// // // // // // //   const navigate = useNavigate();

// // // // // // //   const users = [
// // // // // // //     { email: "johndoe@example.com", password: "Password123!" },
// // // // // // //     { email: "janesmith@example.com", password: "Password123!" },
// // // // // // //     { email: "alexbrown@example.com", password: "Password123!" },
// // // // // // //     { email: "emilywhite@example.com", password: "Password123!" },
// // // // // // //     { email: "michaellee@example.com", password: "Password123!" },
// // // // // // //     { email: "sarahwilson@example.com", password: "Password123!" },
// // // // // // //     { email: "davidclark@example.com", password: "Password123!" },
// // // // // // //     { email: "lauramoore@example.com", password: "Password123!" },
// // // // // // //     { email: "robertking@example.com", password: "Password123!" },
// // // // // // //     { email: "oliviamartin@example.com", password: "Password123!" }
// // // // // // //   ];

// // // // // // //   function handleLogin() {
// // // // // // //     const userExists = users.find(item => userEmail === item.email && userpassword === item.password);
// // // // // // //     if (userExists) {
// // // // // // //       toast.success("Login successful");
// // // // // // //       setUserEmail("");
// // // // // // //       setUserPassword("");
// // // // // // //       setTimeout(() => {
// // // // // // //         navigate("/home");
// // // // // // //       }, 1000);
// // // // // // //     } else {
// // // // // // //       toast.error("Failed to login");
// // // // // // //     }
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <div className="login-container">
// // // // // // //       <Toaster  />
// // // // // // //       <h2>Login</h2>
// // // // // // //       <label>Enter User Email</label>
// // // // // // //       <input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} type="text" />
// // // // // // //       <label>Enter User Password</label>
// // // // // // //       <input value={userpassword} onChange={(e) => setUserPassword(e.target.value)} type="password" />
// // // // // // //       <button onClick={handleLogin}>Login</button>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Login;

// // // // // // import React, { useState } from "react";

// // // // // // const Login = () => {
// // // // // //   const [username, setUsername] = useState("");
// // // // // //   const [password, setPassword] = useState("");
// // // // // //   const [responseData, setResponseData] = useState(null);

// // // // // //   async function handleLogin() {
// // // // // //     try {
// // // // // //       const response = await fetch("https://dummyjson.com/auth/login", {
// // // // // //         method: "POST",
// // // // // //         headers: {
// // // // // //           "Content-Type": "application/json",
// // // // // //         },
// // // // // //         body: JSON.stringify({
// // // // // //           username: username,
// // // // // //           password: password,
// // // // // //           expiresInMins: 30,
// // // // // //         }),
// // // // // //         credentials: "include",
// // // // // //       });

// // // // // //       const data = await response.json();
// // // // // //       setResponseData(data);
// // // // // //       console.log(data);
// // // // // //     } catch (error) {
// // // // // //       console.error("Login Error:", error);
// // // // // //     }
// // // // // //   }

// // // // // //   return (
// // // // // //     <div style={{ width: "300px", margin: "50px auto" }}>
// // // // // //       <h2>Login</h2>

// // // // // //       <input
// // // // // //         type="text"
// // // // // //         placeholder="Username"
// // // // // //         value={username}
// // // // // //         onChange={(e) => setUsername(e.target.value)}
// // // // // //       />

// // // // // //       <br /><br />

// // // // // //       <input
// // // // // //         type="password"
// // // // // //         placeholder="Password"
// // // // // //         value={password}
// // // // // //         onChange={(e) => setPassword(e.target.value)}
// // // // // //       />

// // // // // //       <br /><br />

// // // // // //       <button onClick={handleLogin}>Login</button>

// // // // // //       {responseData && (
// // // // // //         <pre>{JSON.stringify(responseData, null, 2)}</pre>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Login;




// // // // // import React, { useState } from "react";

// // // // // const Login = () => {
// // // // //   const [username, setUsername] = useState("");
// // // // //   const [password, setPassword] = useState("");
// // // // //   const [responseData, setResponseData] = useState(null);
// // // // //   const [error, setError] = useState("");

// // // // //   async function handleLogin() {
// // // // //     if (!username || !password) {
// // // // //       setError("Please enter username and password");
// // // // //       return;
// // // // //     }

// // // // //     setError("");

// // // // //     try {
// // // // //       const response = await fetch("https://dummyjson.com/auth/login", {
// // // // //         method: "POST",
// // // // //         headers: {
// // // // //           "Content-Type": "application/json",
// // // // //         },
// // // // //         body: JSON.stringify({
// // // // //           username,
// // // // //           password,
// // // // //           expiresInMins: 30,
// // // // //         }),
// // // // //         credentials: "include",
// // // // //       });

// // // // //       const data = await response.json();

// // // // //       if (!response.ok) {
// // // // //         throw new Error(data.message || "Login failed");
// // // // //       }

// // // // //       localStorage.setItem("token", data.token);
// // // // //       setResponseData(data);
// // // // //     } catch (err) {
// // // // //       setError(err.message);
// // // // //     }
// // // // //   }

// // // // //   return (
// // // // //     <div style={{ width: "300px", margin: "50px auto" }}>
// // // // //       <h2>Login</h2>

// // // // //       <input
// // // // //         type="text"
// // // // //         placeholder="Username"
// // // // //         value={username}
// // // // //         onChange={(e) => setUsername(e.target.value)}
// // // // //       />

// // // // //       <br /><br />

// // // // //       <input
// // // // //         type="password"
// // // // //         placeholder="Password"
// // // // //         value={password}
// // // // //         onChange={(e) => setPassword(e.target.value)}
// // // // //       />

// // // // //       <br /><br />

// // // // //       <button onClick={handleLogin}>Login</button>

// // // // //       {error && <p style={{ color: "red" }}>{error}</p>}

// // // // //       {responseData && (
// // // // //         <pre>{JSON.stringify(responseData, null, 2)}</pre>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Login;




// // // // import React, { useState } from "react";

// // // // const Login = () => {
// // // //   const [username, setUsername] = useState("");
// // // //   const [password, setPassword] = useState("");
// // // //   const [responseData, setResponseData] = useState(null);

// // // //   async function handleLogin() {
// // // //     try {
// // // //       const response = await fetch("https://dummyjson.com/auth/login", {
// // // //         method: "POST",
// // // //         headers: {
// // // //           "Content-Type": "application/json",
// // // //         },
// // // //         body: JSON.stringify({
// // // //           username: username,
// // // //           password: password,
// // // //           expiresInMins: 30,
// // // //         }),
// // // //         credentials: "include",
// // // //       });

// // // //       const data = await response.json();
// // // //       setResponseData(data);
// // // //       console.log(data);
// // // //     } catch (error) {
// // // //       console.error("Login Error:", error);
// // // //     }
// // // //   }

// // // //   return (
// // // //     <div style={{ width: "300px", margin: "50px auto" }}>
// // // //       <h2>Login</h2>

// // // //       <input
// // // //         type="text"
// // // //         placeholder="Username"
// // // //         value={username}
// // // //         onChange={(e) => setUsername(e.target.value)}
// // // //       />

// // // //       <br /><br />

// // // //       <input
// // // //         type="password"
// // // //         placeholder="Password"
// // // //         value={password}
// // // //         onChange={(e) => setPassword(e.target.value)}
// // // //       />

// // // //       <br /><br />

// // // //       <button onClick={handleLogin}>Login</button>

// // // //       {responseData && (
// // // //         <pre>{JSON.stringify(responseData, null, 2)}</pre>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Login;


// // // // import React, { useState } from "react";

// // // // const Login = () => {
// // // //   const [username, setUsername] = useState("");
// // // //   const [password, setPassword] = useState("");
// // // //   const [responseData, setResponseData] = useState(null);
// // // //   const [error, setError] = useState("");

// // // //   const handleLogin = async () => {
// // // //     setError("");
// // // //     setResponseData(null);

// // // //     try {
// // // //       const response = await fetch("https://dummyjson.com/auth/login", {
// // // //         method: "POST",
// // // //         headers: {
// // // //           "Content-Type": "application/json",
// // // //         },
// // // //         body: JSON.stringify({
// // // //           username,
// // // //           password,
// // // //           expiresInMins: 30,
// // // //         }),
// // // //         credentials: "include",
// // // //       });

// // // //       if (!response.ok) {
// // // //         throw new Error("Invalid username or password");
// // // //       }

// // // //       const data = await response.json();
// // // //       setResponseData(data);
// // // //       console.log(data);
// // // //     } catch (err) {
// // // //       setError(err.message);
// // // //       console.error("Login Error:", err);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div style={{ width: "300px", margin: "50px auto", textAlign: "center" }}>
// // // //       <h2>Login</h2>

// // // //       <input
// // // //         type="text"
// // // //         placeholder="Username"
// // // //         value={username}
// // // //         onChange={(e) => setUsername(e.target.value)}
// // // //       />

// // // //       <br /><br />

// // // //       <input
// // // //         type="password"
// // // //         placeholder="Password"
// // // //         value={password}
// // // //         onChange={(e) => setPassword(e.target.value)}
// // // //       />

// // // //       <br /><br />

// // // //       <button onClick={handleLogin}>Login</button>

// // // //       {error && <p style={{ color: "red" }}>{error}</p>}

// // // //       {responseData && (
// // // //         <pre style={{ textAlign: "left" }}>
// // // //           {JSON.stringify(responseData, null, 2)}
// // // //         </pre>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Login;


// import React, { useState } from "react";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleLogin = async () => {
//     setMessage("");

//     try {
//       const response = await fetch("https://dummyjson.com/auth/login",{

//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           username: username,
//           password: password,
//         }),
        
        
//       });

//       if (!response.ok) {
//           throw new Error("Invalid username or password");
//     }


//       const data = await response.json();
//       console.log(data);
//       setMessage("Login successful ");
//     } catch (error) {
//       console.error(error);
//       setMessage("Failed to fetch ");
//     }
//   };

//   return (
//     <div style={{ width: "300px", margin: "50px auto" }}>
//       <h2>Login</h2>

//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />

//       <br /><br />

//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <br /><br />

//       <button onClick={handleLogin}>Login</button>

//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default Login;

// // // import React, { useState } from "react";

// // // const Login = () => {
// // //   const [username, setUsername] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [message, setMessage] = useState("");

// // //   const handleLogin = async () => {
// // //     if (!username || !password) {
// // //       setMessage("Please enter username and password");
// // //       return;
// // //     }

// // //     try {
// // //       const response = await fetch("https://dummyjson.com/auth/login", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //         },
// // //         body: JSON.stringify({
// // //           username,
// // //           password,
// // //           expiresInMins: 30, // 🔑 REQUIRED
// // //         }),
// // //       });

// // //       const data = await response.json();

// // //       if (!response.ok) {
// // //         throw new Error(data.message);
// // //       }

// // //       console.log("LOGIN SUCCESS:", data);
// // //       setMessage("Login successful ✅");
// // //     } catch (error) {
// // //       console.error("LOGIN ERROR:", error.message);
// // //       setMessage(error.message);
// // //     }
// // //   };

// // //   return (
// // //     <div style={{ width: "300px", margin: "50px auto" }}>
// // //       <h2>Login</h2>

// // //       <input
// // //         type="text"
// // //         placeholder="Username"
// // //         value={username}
// // //         onChange={(e) => setUsername(e.target.value.trim())}
// // //       />

// // //       <br /><br />

// // //       <input
// // //         type="password"
// // //         placeholder="Password"
// // //         value={password}
// // //         onChange={(e) => setPassword(e.target.value.trim())}
// // //       />

// // //       <br /><br />

// // //       <button onClick={handleLogin}>Login</button>

// // //       {message && <p>{message}</p>}
// // //     </div>
// // //   );
// // // };

// // // export default Login;


// // import React,{useState} from 'react'
// // const Login=() =>{
// //   var[data,setData]=useState([])
// //   var [email,setEmail]=useState("")
// //   var[password,setPassword]=useState("")
// //   async function handleLogin(){
// //     var result = await fetch("https://6982d1639c3efeb892a35eb5.mockapi.io/data/users")
// //     var jsonData=await result.json()
// //     setData(jsonData)
// //     console.log(data)
// //   }
// //   return(
// //     <div>
// //       <label htmlFor=''>Enter Email</label>
// //       <input value={email}on onChange={(e)=>{setEmail(e.target.value)}}type="text"/>
// //       <label htmlFor=''>Enter password</label>
// //     </div>
// //   )
// // }


// // import React, { useState } from 'react'

// // const Login = () => { 
// //     var [data,setData] = useState([])
// //     var [email,setEmail] = useState("")
// //     var [password,setPassword] = useState("")
// //     async function handleLogin(){
// //         var result = await fetch("https://6982d1639c3efeb892a35eb5.mockapi.io/data/users")
// //         var jsonData = await result.json()
// //         setData(jsonData)
// //         console.log(data);
// //         // write the code here for the 


// //     }

    
// //   return (
// //     <div>
// //         <label htmlFor="">Enter Email </label>
// //         <input value={email}  onChange={(e)=>{setEmail(e.target.value)}} type="text" />
// //         <label htmlFor="">Enter Password</label>
// //         <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="text" />
// //         <button onClick={handleLogin}>Login</button>
// //     </div>
// //   )
// // }

// // export default Login

import React from "react";
function App(){
  return(
    <div id="main">
      <h1>iam the login page</h1>
      <label htmlFor="">Enter email id</label>
      <input type=""/>
      <label htmlFor="">Enter password</label>
      <input type=""/>
      <button>login</button>
    </div>
  )
}
export default App













