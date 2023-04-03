

import React, { useState } from "react";

function Form() {
  const [showUserDetails, setUserDetails] = useState(true);
  const [employees,setEmployees]=useState([])

  const [employeeDetail, setEmployeeDetail] = useState({
    Name: "",
    Department: "",
    Rating: ""
  });

  const changeHandler = (e) => {  //parameter 'e' is an object that represents the event that has occured
    setEmployeeDetail((prevState) => {
      const newState = { ...prevState };
      newState[e.target.name] = e.target.value;
      return newState;
    });
  };

  const submitHandler = () =>{
    setEmployees((prevState) =>{
      const newState =[...prevState];
      newState.push(employeeDetail);
      return newState;
    });
    setUserDetails(false); //making the 1st div false

  }
  
  return (
    <div>
      {showUserDetails ? (
        <div className="App">
          <h1>EMPLOYEE FEEDBACK FORM</h1>
          <form>
            <label>Name : </label>
            <input type="text" name="Name" value={employeeDetail.Name} onChange={changeHandler} className="labels"></input>
            <br /><br />
            <label>Department : </label>
            <input type="text" name="Department" value={employeeDetail.Department} onChange={changeHandler} className="labels"></input>
            <br /><br />
            <label>Rating : </label>
            <input type="number" name="Rating" value={employeeDetail.Rating} onChange={changeHandler}className="labels"></input>
            <br /><br /><br />
            <button type="button" onClick={submitHandler} className="btn">
              Submit
            </button>
            {/* HTML button is of type submit */}
          </form><br /><br /><br />
        </div>
      ) : (
        
        <div>
          <h1 style={{textAlign:"center"}}>EMPLOYEE FEEDBACK DATA</h1>
          <div className="container">
            {employees.map((value,index) =>
              {
                return(
                  <div className="container2" key={index}> Name : {value.Name} | Department : {value.Department} |  Rating : {value.Rating}</div>   //giving an unique key and iyerating through array
                )
              }
            )}
          </div>
          <br/>
          <button type="button" onClick={() =>setUserDetails(true)} className="btn1">Go Back</button>
        </div>
      )}
    </div>
  );
}
export default Form;