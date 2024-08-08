import React from 'react'

export default function ConfirmBooking() {
    return (
        <div className='container'>
        <div className="card p-4 w-50 text-center">
          <h5 className="card-title">Your Booking Details</h5>
          <ul className="list-unstyled">
            <li><strong>Itinerary:</strong> Chennai &gt; Coimbatore</li>
            <li><strong>Pickup Date:</strong> 21st July 2024 at 7:00 AM</li>
            <li><strong>Car Type:</strong> Wagon R or Equivalent</li>
            <li><strong>KMs Included:</strong> 510 km</li>
            <li><strong>Total Fare:</strong> ₹ 7256</li>
          </ul>
          <h6 className="mt-4">Inclusions</h6>
          <ul>
            <li>Base Fare and Fuel Charges</li>
            <li>Driver Allowance</li>
            <li>State Tax & Toll</li>
            <li>GST (5%)</li>
          </ul>
        </div>
        </div>
      );
}
