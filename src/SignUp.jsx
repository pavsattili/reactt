// // import React, { useState } from "react";
// // import { FaEye, FaSlash } from "react-icons/fa";
// // import "./SignUp.css";
// // const SignUp = () => {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);

// //   async function handleSignUp() {
// //     if (!name || !email || !password) {
// //       alert("Please fill all details");
// //       return;
// //     }

// //     const formData = {
// //       userName: name,
// //       userEmail: email,
// //       userPassword: password,
// //     };

// //     try {
// //       const response = await fetch(
// //         "https://6982d1639c3efeb892a35eb5.mockapi.io/data/users",
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify(formData),
// //         }
// //       );

// //       if (response.ok) {
// //         alert("Account created successfully");
// //         setName("");
// //         setEmail("");
// //         setPassword("");
// //       } else {
// //         alert("Failed to create account");
// //       }
// //     } catch (error) {
// //       alert("Something went wrong");
// //       console.error(error);
// //     }
// //   }

// //   return (
// //     <div id="signup-container">
// //       <div id="signup-box">
// //         <h2>create Account</h2>
// //       <label>Enter Name</label>
// //       <input
// //         type="text"
// //         value={name}
// //         onChange={(e) => setName(e.target.value)}
// //       />

// //       <label>Enter Email</label>
// //       <input
// //         type="email"
// //         value={email}
// //         onChange={(e) => setEmail(e.target.value)}
// //       />

// //       <label>Enter Password</label>
// //       <div style={{ display: "flex", alignItems: "center" }}>
// //         <input
// //           type={showPassword ? "text" : "password"}
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //         />
// //         <span
// //           style={{ cursor: "pointer", marginLeft: "8px" }}
// //           onClick={() => setShowPassword(!showPassword)}
// //         >
// //           {showPassword ? <FaSlash /> : <FaEye />}
// //         </span>
// //       </div>

// //       <button onClick={handleSignUp}>Sign Up</button>
// //     </div>
// //     </div>
// //   );
// // };

// // export default Signup;
// import React, { useState } from "react";
// import { FaEye, FaSlash } from "react-icons/fa";
// import "./SignUp.css";

// const SignUp = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   async function handleSignUp() {
//     if (!name || !email || !password) {
//       alert("Please fill all details");
//       return;
//     }

//     const formData = {
//       userName: name,
//       userEmail: email,
//       userPassword: password,
//     };

//     try {
//       const response = await fetch(
//         "https://6982d1639c3efeb892a35eb5.mockapi.io/data/users",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );

//       if (response.ok) {
//         alert("Account created successfully");
//         setName("");
//         setEmail("");
//         setPassword("");
//       }
//     } catch (error) {
//       alert("Something went wrong");
//     }
//   }

//   return (
//     <div id="signup-container">
//       <div id="signup-box">
//         <h2>Create Account</h2>

//         <label>Enter Name</label>
//         <input value={name} onChange={(e) => setName(e.target.value)} />

//         <label>Enter Email</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <label>Enter Password</label>
//         <div id="password-field">
//           <input
//             type={showPassword ? "text" : "password"}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <span onClick={() => setShowPassword(!showPassword)}>
//             {showPassword ? <FaSlash /> : <FaEye />}
//           </span>
//         </div>

//         <button onClick={handleSignUp}>Sign Up</button>
//       </div>
//     </div>
//   );
// };

// export default SignUp;



// import React from 'react'
// import "./singup.css";
// function Signup(){
//   return(
//     <div id='main'>
//       <h1>iam the signup page</h1>
//       <label htmlFor=''>enter user name</label>
//       <input type=''/>
//       <label htmlFor=''>enter email id</label>
//       <input type=''/>
//       <label htmlFor=''>enter number</label>
//       <input type=''/>
//       <button >signup</button>
//     </div>
//   )
// }




import React from "react";
import "./signup.css";

function Signup() {
  return (
    <div id="main">
      <h1>I am the signup page</h1>

      <label>Enter user name</label>
      <input type="text" placeholder="Username" />

      <label>Enter email id</label>
      <input type="email" placeholder="Email" />

      <label>Enter number</label>
      <input type="number" placeholder="Mobile number" />

      <button>Signup</button>
    </div>
  );
}

export default Signup;


