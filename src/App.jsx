// // // // // // // // // // 
// // // // // // // // // import React,{useEffect,useState} from "react";
// // // // // // // // // import React from 'react'

// // // // // // // // //  const App = () => {
// // // // // // // // //   var[data,setData]=useState([])
// // // // // // // // //   var[cart,setCart]=useState([])
// // // // // // // // //   var[quatity,setQuantity]=useState(0)
// // // // // // // // //   async function fetchData(){
// // // // // // // // //     var result=await fetch
// // // // // // // // //   }
   
    
// // // // // // // // //   }
// // // // // // // // //   return (
// // // // // // // // //     <div>App</div>
// // // // // // // // //   )
// // // // // // // // // }





// // // // // // // // import React, { useEffect, useState } from 'react'

// // // // // // // // const App = () => {
// // // // // // // //     var [data,setData] = useState([])
// // // // // // // //     var [cart,setCart] = useState([])
// // // // // // // //     var [qauntity,setQuanity] = useState(0)

// // // // // // // //     async function fetchData(){
// // // // // // // //         var result = await fetch("https://fakestoreapi.com/products")
// // // // // // // //         var jsonResult = await result.json()
// // // // // // // //         setData(jsonResult)
// // // // // // // //     }
// // // // // // // //     useEffect(()=>{
// // // // // // // //         fetchData()
// // // // // // // //     },[])

// // // // // // // //     function addToCart(product){
// // // // // // // //         var itemExist = cart.find(item=>item.id == product.id)
// // // // // // // //         if(itemExist){
// // // // // // // //             setQuanity(qauntity+1)

// // // // // // // //         }else{
// // // // // // // //             setCart([...cart,product])
// // // // // // // //         }
// // // // // // // //     }
// // // // // // // //     console.log(cart);

// // // // // // // //   return (
// // // // // // // //     <div>
// // // // // // // //         {
// // // // // // // //             data.map((item)=>{
// // // // // // // //                 return(
// // // // // // // //                     <div>
// // // // // // // //                         <h1>{item.title}</h1>
// // // // // // // //                         <button onClick={()=>addToCart(item)}>Add To Cart</button>

// // // // // // // //                     </div>
// // // // // // // //                 )
// // // // // // // //             })
// // // // // // // //         }
// // // // // // // //         <div>
// // // // // // // //             {
// // // // // // // //                 cart.map((item)=>{
// // // // // // // //                     return(
// // // // // // // //                         <div>
// // // // // // // //                             <h1>{item.title}</h1>
// // // // // // // //                             <h1>{qauntity}</h1>
// // // // // // // //                         </div>
// // // // // // // //                     )
// // // // // // // //                 })
// // // // // // // //             }
// // // // // // // //         </div>
// // // // // // // //     </div>
// // // // // // // //   )
// // // // // // // // }

// // // // // // // // export default App




// // // // // // // import React, { useEffect, useState } from "react";

// // // // // // // const App = () => {
// // // // // // //   const [data, setData] = useState([]);

// // // // // // //   async function fetchData() {
// // // // // // //     const result = await fetch("https://fakestoreapi.com/products");
// // // // // // //     const jsonResult = await result.json();
// // // // // // //     setData(jsonResult);
// // // // // // //   }

// // // // // // //   useEffect(() => {
// // // // // // //     fetchData();
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       {data.map((item) => (
// // // // // // //         <div key={item.id}>
// // // // // // //           <h1>{item.title}</h1>
// // // // // // //           <img src={item.image} alt={item.title} width="150" />
// // // // // // //         </div>
// // // // // // //       ))}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default App;


// // // // // // import React,{useEffect,useState}from 'react';
// // // // // // const APP =()=>{
// // // // // //     var[data,setData]=useState([])
// // // // // //     async function fetchData( ) {
// // // // // //         var result = await fetch("https://fakestoreapi.com/products")
// // // // // //         var jsonResult= await result.json()
// // // // // //         setData(jsonResult)
// // // // // //     }
// // // // // //     console.log(data);
// // // // // //     useEffect(()=>{
// // // // // //         fetchData()
// // // // // //     },[])
// // // // // // return (
// // // // // //   <div>
// // // // // //     {data.map((item) => (
// // // // // //       <div key={item.id}>
// // // // // //         <h1>{item.title}</h1>
// // // // // //         <img src={item.image} alt={item.title} width="150" />
// // // // // //       </div>
// // // // // //     ))}
// // // // // //   </div>
// // // // // // );
// // // // // // }
// // // // // // export default

// // // // // // import React from 'react'
// // // // // // import  SignUp  from './SignUp'

// // // // // // function APP(){
// // // // // //     var accountExists = true
// // // // // //     console.log(accountExists);
// // // // // //     var component;
// // // // // //     console.log(component);
// // // // // //     if(accountExists){
// // // // // //         component=<Login/>
// // // // // //     }else{
// // // // // //         component=<SignUp/>
// // // // // //     }
// // // // // //     return(
// // // // // //         <div>
// // // // // //             {component}
// // // // // //         </div>
// // // // // //     )
// // // // // // }
// // // // // // export default APP
        
// // // // // // import React from "react";
// // // // // // import SignUp from "./SignUp";
// // // // // // import Login from "./Login";

// // // // // // function App() {
// // // // // //   const accountExists = true;

// // // // // //   let component;
// // // // // //   if (accountExists) {
// // // // // //     component = <Login />;
// // // // // //   } else {
// // // // // //     component = <SignUp />;
// // // // // //   }

// // // // // //   return (
// // // // // //     <div>
// // // // // //       {component}
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default App;

// // // // // import React,{useState}from "react";
// // // // // function App(){
// // // // //     var[data,setData]=useState("hello world")
// // // // //     function handlechange(){
// // // // //     setData("hello bye")
// // // // // }
// // // // // return (
// // // // //     <div>
// // // // //         <h1>{data}</h1>
// // // // //         <button onClick={handlechange}>change</button>
// // // // //     </div>
// // // // // )
// // // // // }
// // // // // export default App
    


// // // // import React,{useState}from'react'

// // // // function App(){
// // // //     var[count,setcount]=useState(0)
// // // //     console.log("count",count);
// // // //     function handlIncrement(){
// // // //         setcount(count+1)
// // // //     }
// // // //     function handleDecrement(){
// // // //         setcount(count-1)
// // // //     }
// // // //     function handleReset(){
// // // //         setcount(0)
// // // //     }
// // // //     return(
// // // //         <div>
// // // //             <h1>{count}</h1>
// // // //             <button onClick={handlIncrement}>increment</button>
// // // //             <button onClick={handleDecrement}>decrement</button>
// // // //             <button onClick={handleReset}>reset</button>
// // // //         </div>
// // // //     )
// // // // }
// // // // export default  App



// // // import React,{ useEffect,,useState} from "react";

// // // const App=()=>{
// // //     var[data,setData]=useState([])
// // //     async function fetchData() {
// // //         var result=await fetch("https://fakestoreapi.com/products")
// // //         var jsonResult=await result.json()
// // //         setData(jsonResult)
// // //     }
// // //     console.log(data);
// // //     useEffect(()=>{
// // //         fetchData()
// // //     },[])
// // //     return (
// // //         <div>
// // //             {
// // //             data.map((item))=>{
// // //                 return(
// // //                     <div>
// // //                         <h1>{item.title}</h1>
// // //                         <img src={item.iamge}alt=""/>
// // //                     </div>
// // //                 )
// // //             }
// // //                 return(
// // //                     <div>

// // //                     </div>
// // //                 )
// // //             )
// // //         </div>
// // //     )

// // // 
// // // 

// // import React from "react";
// // import Header from "./Header"; 

// // const App = () => {
// //   var myObj = {
// //     name: "Pavani",
// //     role: "Developer",
// //     tech: "React"
// //   };

// //   return (
// //     <div>
// //       <Header data={myObj} />
// //     </div>
// //   );
// // };

// // export default 


// import React from "react";
// import Header from "./Header";

// const App = () => {
//   var a = "pavani";

//   return (
//     <div>
//       <Header name={a} />
//     </div>
//   );
// };

// export default App;









// import React from 'react'
// import Header from './Header'

//  const App = () => {
//     var a = "pavani"
//   return (
//     <div>
//     <Header data = {a}/>
//         </div>
//   )
// }
// export default App


// import React from "react";
// import Header from'./Header'


// const App = ()=>{
//   var array = ["apple","carrot","betrrot",]
//   return(
//     <div>
//       <Header data={array[1]}/>
//     </div>
//   )
// }
// export default  App


import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);

  const API_KEY = "c19712e9f07fdfcfa189baa61f631878";  

  async function fetchData() {
    if (!input) return;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`
      );

      const jsonData = await response.json();

      if (jsonData.cod === 200) {
        setData(jsonData);
      } else {
        alert("City not found");
      }
    } catch (error) {
      console.log("Error fetching weather:", error);
    }
  }

  return (
    <div className="app">
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search city..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={fetchData}>Search</button>
      </div>

      <div className="main-container">
        
        {data && data.main && (
          <div className="left-card">
            <div className="overlay">
              <div className="top-info">
                <h1>{Math.round(data.main.temp)}°</h1>

                <div className="weather-condition">
                  <h3>{data.weather[0].main}</h3>
                  <p>Feels like {Math.round(data.main.feels_like)}°</p>
                </div>
              </div>

              <div className="bottom-details">
                <div className="info-box">
                  <span>Wind</span>
                  <p>{data.wind.speed} m/s</p>
                </div>

                <div className="info-box">
                  <span>Humidity</span>
                  <p>{data.main.humidity}%</p>
                </div>

                <div className="info-box">
                  <span>Visibility</span>
                  <p>{data.visibility / 1000} km</p>
                </div>

                <div className="info-box">
                  <span>Pressure</span>
                  <p>{data.main.pressure} hPa</p>
                </div>

                <div className="info-box">
                  <span>Min Temp</span>
                  <p>{Math.round(data.main.temp_min)}°</p>
                </div>

                <div className="info-box">
                  <span>Max Temp</span>
                  <p>{Math.round(data.main.temp_max)}°</p>
                </div>
              </div>
            </div>
          </div>
        )}

      
        <div className="right-card">
          <h2>Hourly forecast</h2>

          <div className="graph-placeholder">
            <div className="line"></div>
          </div>

          <div className="hourly-container">
            {["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"].map(
              (time, index) => (
                <div key={index} className="hour-box">
                  <p>{time}</p>
                  <p>☀</p>
                  <p>24°</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


