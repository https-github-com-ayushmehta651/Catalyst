// import React from "react";
// import sairen from "../assets/sairen.jpg";
// import "../styles/Search.css";

// function Search() {
//   return (
//     <div className="contact">
//       <div
//         className="leftSide"
//         style={{ backgroundImage: `url(${sairen})` }}
//       ></div>
//       <div className="rightSide">
//         <h1> Search</h1>

//         <form id="contact-form" method="POST">
//         <label for="district">Choose a District:</label>

// <select name="district" id="district">
// <option value="Bangalore">Bangalore</option>
// <option value="Mysuru">Mysuru</option>
// <option value="Mangaluru">Mangaluru</option>
// <option value="Hassan">Hassan</option>
// </select>
// <label for="district">Choose Police station</label>

// <select name="district" id="district">
// <option value="Jayanagar">Jayanagar</option>
// <option value="Majestic">Majestic</option>
// <option value="Lalabagh">Lalbagh</option>
// <option value="indiranagar">indiranagar</option>
// </select>
//           <label htmlFor="name">FIR number</label>
//           <input number="num" placeholder="Enter FIR number" type="number" />
          
//           <button type="submit"> Search</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Search;
import React, {useState} from "react";
import PizzaLeft from "../assets/searchfir.svg";
import "../styles/Search.css";
// import { useState } from "react";

function Search() {
  const [user,setUser] = useState({
    city:"",district:"",num:""
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user,[name]:value});
  }
  return (
    <div className="search">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
       <h1> Search</h1>

         <form id="contact-form" method="POST">
         <label for="district">Choose a District:</label>

 <select name="city" id="district"  value={user.city} onChange={handleInputs}>
 <option value="Bangalore">Bangalore</option>
 <option value="Mysuru">Mysuru</option>
 <option value="Mangaluru">Mangaluru</option>
 <option value="Hassan">Hassan</option>
 </select>
 <label for="district">Choose Police station</label>

 <select name="district" id="district"  value={user.district} onChange={handleInputs}>
 <option value="Jayanagar">Jayanagar</option>
 <option value="Majestic">Majestic</option>
 <option value="Lalabagh">Lalbagh</option>
 <option value="indiranagar">indiranagar</option>
 </select>
           <label htmlFor="num">FIR number</label>
          <input name="num" placeholder="Enter FIR number" type="number"  value={user.num} onChange={handleInputs}/>
          
           <button type="submit"> Search</button>
        </form>
      </div>
    </div>
  );
}


export default Search;

