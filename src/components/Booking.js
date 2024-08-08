import { useMemo, useState } from "react";
import SelectField from "./SelectField";
import { useNavigate } from "react-router-dom";

function Booking() {
  const navigate=useNavigate()
  const [bookingTab,setbookingtab] = useState("RoundTrip")
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    pickupDate: '',
    pickupTime: '',
    hourlyBasis: '',
    pickupCity: '',
    comments: ''
  });
  const pickupTime=useMemo(()=>{
    return [
      {text:"Select pickup Time",value:""},
      {text:"8:00 AM",value:"8:00 AM"},
      {text:"9:00 AM",value:"9:00 AM"},
      {text:"10:00 AM",value:"10:00 AM"},
      {text:"11:00 AM",value:"11:00 AM"},
    ]
  },[])
  function handleChange(){return ""}
  function handleSubmit(){return ""}
  return (


<div className="container mt-3 mr-5">
<div>
<h2 className="text-center text-white mb-4">Book a Ride</h2>
     <button onClick={()=>setbookingtab("RoundTrip")} className={`tabbutton ${bookingTab === "RoundTrip" && "active"}`}><span></span>Round Trip</button>
     <button onClick={()=>setbookingtab("Oneway")} className={`tabbutton ${bookingTab === "Oneway" && "active"}`}><span></span>Oneway Trip</button>
     <button onClick={()=>setbookingtab("Hourly")} className={`tabbutton ${bookingTab === "Hourly" && "active"}`}><span></span>Hourly Rental</button>
      </div>
      <form onSubmit={handleSubmit} className="text-white p-4 rounded shadow-lg">
       
        <div className="row mb-3">
          <div className="form-group col-md-6">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        {/* <div className="form-group">
          <label htmlFor="mobile">Mobile Number *</label>
          <input
            type="tel"
            className="form-control"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div> */}
        <div className="row mb-3">
          <div className="form-group col-md-6">
            <label htmlFor="pickupDate">Pickup Date *</label>
            <input
              type="date"
              className="form-control"
              id="pickupDate"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="pickupTime">Pick up Time</label>
            <SelectField handleChange={handleChange} options={pickupTime} value={formData.pickupTime} id="pickupTime"/>
          </div>
        </div>
      <div className="row mb-3">
        {bookingTab === "Hourly" && <div className="form-group col-md-6">
          <label htmlFor="hourlyBasis">Hourly Basis</label>
          <select
            className="form-control"
            id="hourlyBasis"
            name="hourlyBasis"
            value={formData.hourlyBasis}
            onChange={handleChange}
          >
            <option value="">Select Hour package From List</option>
            <option value="2">2 hours</option>
            <option value="4">4 hours</option>
            <option value="6">6 hours</option>
            <option value="8">8 hours</option>
          </select>
        </div>}
        <div className="form-group col-md-6">
          <label htmlFor="pickupCity">Pickup City *</label>
          <select
            className="form-control"
            id="pickupCity"
            name="pickupCity"
            value={formData.pickupCity}
            onChange={handleChange}
            required
          >
            <option value="">Select Pickup City</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
            <option value="Houston">Houston</option>
          </select>
        </div>
        {bookingTab === "Oneway" && <div className="form-group col-md-6">
          <label htmlFor="DropoffCity">Drop Off City *</label>
          <select
            className="form-control"
            id="DropoffCity"
            name="DropoffCity"
            value={formData.pickupCity}
            onChange={handleChange}
            required
          >
            <option value="">Select Dropoff City City</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
            <option value="Houston">Houston</option>
          </select>
        </div>}

       { bookingTab === "RoundTrip" && <div className="row mb-3">
          <div className="form-group col-md-6">
            <label htmlFor="Dropoffdate">DropOff Date *</label>
            <input
              type="date"
              className="form-control"
              id="Dropoffdate"
              name="Dropoffdate"
              value={formData.pickupDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="dropofftime">DropOff Time</label>
            <SelectField handleChange={handleChange} options={pickupTime} value={formData.pickupTime} id="dropofftime"/>
          </div>
        </div>}
        </div>
        {/* <div className="form-group">
          <label htmlFor="comments">Comments</label>
          <textarea
            className="form-control"
            id="comments"
            name="comments"
            rows="3"
            value={formData.comments}
            onChange={handleChange}
          ></textarea>
        </div> */}
        <button type="submit" className="explorebutton mt-4" onClick={()=> navigate('/carselection')}>
          <span></span>Continue
        </button>
      </form>
    </div>
  );
}

export default Booking;

//     <div className="App">
//     {/* <input type="text" value="Your current location " readOnly/> */}
//       <div>
//     {/* <iframe title="map" src="https://www.google.com/maps" width="100%" height="450" loading="lazy">
    
//     </iframe> */}
          
// <section className="booking-form-section">
//         <div className="booking-tabs">
//           <button onClick={()=>setbookingtab("RoundTrip")} className={bookingTab === "RoundTrip" && "active"}><span></span>Round Trip</button>
//           <button onClick={()=>setbookingtab("Oneway")} className={bookingTab === "Oneway" && "active"}><span></span>Oneway Trip</button>
//           <button onClick={()=>setbookingtab("Hourly")} className={bookingTab === "Hourly" &&"active"}><span></span>Hourly Rental</button>
//         </div>
//         <form >
//         <div className="container text-center">
//         <div className="row row-cols-sm-2  ">
          
//           <input type="text" placeholder="Your Name" required />
//           <input type="email" placeholder="Your Email Id" required  />
    
//           <input type="text" placeholder="Your Mobile Number" required class="col"/>
//           <input type="date" required class="col"/>
//           <select required class="col">
//             <option>Select Pick up Time</option>
//             {/* Add options here */}
//           </select>
//           <select required class="col">
//             <option>Select Hour package From List</option>
//             {/* Add options here */}
//           </select>
//           <select required class="col">
//             <option>Select Pickup City</option>
//             {/* Add options here */}
//           </select>
//           <textarea placeholder="Enter Your Comments" class="col"></textarea>
//           </div> </div>
//           <button type="submit"><span></span>Continue</button>
//         </form>
//         <div className="app-store-links">
//           <img src="google-play.png" alt="Google Play" />
//           <img src="app-store.png" alt="App Store" />
//         </div>
//       </section>
    
//     </div>
//     </div>