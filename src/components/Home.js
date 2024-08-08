import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
const navigate=useNavigate()

  return (
    <div>
      
        <div class="content">
            <h1>Book your car now</h1>
            {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum exercitationem praesentium est esse, <br>deleniti ab quia inventore consequuntur beatae temporibus cumque quibusdam dolorum saepe itaque nesciunt error?<br> Illum, quos nesciunt?</p> */}
            <div>
                <button className='explorebutton' type="button" onClick={()=> navigate('/booking')}><span ></span>Explore cars </button>
                {/* <button type="button"><span></span>Sign Up</button> */}
            </div>
        </div>
       
    </div>
  )
}
