// import React from "react";
// import PizzaLeft from "../assets/form.svg";
// import "../styles/Contact.css";

// function Contact() {
//   return (
//     <div className="contact">
//       <div
//         className="leftSide"
//         style={{ backgroundImage: `url(${PizzaLeft})` }}
//       ></div>
//       <div className="rightSide">
//         <h1> FIR Form</h1>

//         <form id="contact-form" method="POST">
//         <label for="district">Choose a District:</label>

//         <select name="district" id="district">
//         <option value="Bangalore">Bangalore</option>
//         <option value="Mysuru">Mysuru</option>
//         <option value="Mangaluru">Mangaluru</option>
//         <option value="Hassan">Hassan</option>
//         </select>
//         <label for="district">Choose Police station</label>

//         <select name="district" id="district">
//         <option value="Jayanagar">Jayanagar</option>
//         <option value="Majestic">Majestic</option>
//         <option value="Lalabagh">Lalbagh</option>
//         <option value="indiranagar">indiranagar</option>
//         </select>
//           <label htmlFor="name">Name</label>
//           <input name="name" placeholder="Enter full name..." type="text" />
//           <label htmlFor="name">Address</label>
//           <input name="name" placeholder="Enter full address..." type="text" />
//           <label htmlFor="name">Aadhar number</label>
//           <input name="name" placeholder="Enter Aadhar number" type="number" />
//           <label htmlFor="name">FIR case number</label>
//           <input name="name" placeholder="Enter case number" type="number" />
//           <label htmlFor="name">Section</label>
//           <input name="name" placeholder="Enter Section" type="text" />
//           <label for="TodayDate">Today's Date</label>
//            <input type="date" id="birthday" name="birthday"></input>
//            <label for="Time">Incident Time</label>
//            <input type="time" id="Time" name="Time"></input>
//           <label for="w3review">Description of case/FIR report:</label>
//           <textarea id="Description" name="description" rows="9" cols="80">
//            Write FIR here......
//           </textarea>
//           <button type="submit"> Save FIR</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Contact;
import React,{useState} from "react";
import PizzaLeft from "../assets/form.svg";
import "../styles/Contact.css";

function Contact() {

  const [user,setUser] = useState({
    name:"",address:"",case:"",caseno:"",section:"",date:"",Time:"",description:""
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user,[name]:value});
  }
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
       <div className="rightSide">
         <h1> FIR Form</h1>

         <form id="contact-form" method="POST">
         <label for="district">Choose a District:</label>

         <select name="district" id="district">
         <option value="Bangalore">Bangalore</option>
         <option value="Mysuru">Mysuru</option>
         <option value="Mangaluru">Mangaluru</option>
         <option value="Hassan">Hassan</option>
         </select>
         <label for="district">Choose Police station</label>

        <select name="district" id="district">
         <option value="Jayanagar">Jayanagar</option>
         <option value="Majestic">Majestic</option>
         <option value="Lalabagh">Lalbagh</option>
         <option value="indiranagar">indiranagar</option>
         </select>
           <label htmlFor="name">Name</label>
           <input name="name" placeholder="Enter full name..." type="text" value={user.name} onChange={handleInputs}/>
           <label htmlFor="address">Address</label>
           <input name="address" placeholder="Enter full address..." type="text" value={user.address} onChange={handleInputs} />
           <label htmlFor="case">Aadhar number</label>
           <input name="case" placeholder="Enter Aadhar number" type="number" value={user.case} onChange={handleInputs}/>
           <label htmlFor="caseno">FIR case number</label>
           <input name="caseno" placeholder="Enter case number" type="number" value={user.caseno} onChange={handleInputs} />
           <label htmlFor="section">Section</label>
           <input name="section" placeholder="Enter Section" type="text" value={user.section} onChange={handleInputs} />
           <label for="date">Incident Date</label>
            <input type="date" id="birthday" name="date" value={user.date} onChange={handleInputs}></input>
            <label for="Time">Incident Time</label>
            <input type="time" id="Time" name="Time" value={user.Time} onChange={handleInputs}></input>
           <label for="description">Description of case/FIR report:</label>
           <textarea id="Description" name="description" rows="9" cols="80" value={user.description} onChange={handleInputs}>
            Write FIR here......
           </textarea>
           <button type="submit"> Save FIR</button>
     
        </form>
      </div>
    </div>
  );
}

export default Contact;

