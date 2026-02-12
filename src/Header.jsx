// 
// 


// import React from "react";

// const Header = ({ name }) => {
//   return (
//     <div>
//       <h1>{name}</h1>
//     </div>
//   );
// };

// export default Header;
// import React from "react";

// const Header = (props) => {
//   console.log(props.name);

//   return (
//     <div>
//       <h1>{props.name}</h1>
      
//     </div>
//   );
// };

// export default Header;





import React from 'react'

const Header = (props) => {
  console.log(props.data);
  return (
    <div>
<h1>{props.data}</h1>
    </div>
  )
}

export default Header
