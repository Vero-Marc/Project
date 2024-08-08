import { useState } from "react";

function Signup() {
  const [formvalues,setValues ] = useState({fname:"",email:"",mobile:"",pwd:""})
  const handleChange =(e) =>{
    setValues((val) => {return {...val,[e.target.id] : e.target.value}})
  }
  console.log(formvalues)
  const handleSubmit = (e) =>{
      e.preventDefault()
      console.log(formvalues)
  }

  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
     <label htmlFor="fname">UserName : </label> 
     <input id="fname" type="text" name="Username" placeholder="Username" onChange={(e)=> handleChange(e)}/><br></br>
     <label text="Email" htmlFor="email">Email : </label> 
     <input id="email" type="text" name="Email" placeholder="Email" onChange={(e)=> handleChange(e)} /><br></br>
     <label text="Mobile Number" htmlFor="mobile"> Mobile : </label> 
     <input id="mobile" type="text" name="Mobile Number" placeholder="Mobile Number" onChange={(e)=> handleChange(e)}/><br></br>
     <label text="Password" htmlFor="pwd">Password : </label> 
     <input id="pwd" type="text" name="Password" placeholder="Password" onChange={(e)=> handleChange(e)}/><br></br>
     <input type="submit" text="Submit" className="succ_button"/>
    </form>
    
  );
}

export default Signup;