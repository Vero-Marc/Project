import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CarSelection() {
  const navigate = useNavigate()
  const cars = [
    {
      name: "Wagon R",
      originalPrice: 9118,
      discountedPrice: 7256,
      savings: 1862,
      distance: "up to 510 km",
      image: "url-to-wagonr-image",
    },
    {
      name: "Toyota Etios",
      originalPrice: 9296,
      discountedPrice: 7395,
      savings: 1901,
      distance: "up to 510 km",
      image: "url-to-toyota-etios-image",
    },
    {
      name: "Ertiga",
      originalPrice: 13868,
      discountedPrice: 12477,
      savings: 1391,
      distance: "up to 510 km",
      image: "url-to-ertiga-image",
    },
    {
      name: "Toyota Innova",
      originalPrice: 25616,
      discountedPrice: 24515,
      savings: 1071,
      distance: "up to 510 km",
      image: "url-to-toyota-innova-image",
    },
    {
      name: "Toyota Innova Crysta",
      originalPrice: 31715,
      discountedPrice: 30644,
      savings: 1071,
      distance: "up to 510 km",
      image: "url-to-innova-crysta-image",
    },
  ]

  return (
    <div >
      <h2 className="text-center mb-4 text-white">Select Your Car</h2>
      {cars.map((car, index) => (
          <div
            className="card w-50 bg-black text-white mb-3 shadow-sm"
            style={{ maxWidth: "1000px", margin: "auto" }}
            key={index}
          >
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={car.image}
                  className="card-img"
                  alt={`${car.name}`}
                  style={{ height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{car.name}</h5>
                  <div className="card-text">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <div className="badge badge-info">Top Rated</div>
                      </li>
                      <li className="list-inline-item">
                        <div className="badge badge-success">Includes Toll</div>
                      </li>
                      <li className="list-inline-item">
                        <div className="badge badge-primary">GST Included</div>
                      </li>
                    </ul>
                    <div className="mt-3">
                      <div className="text-muted text-decoration-line-through">
                        ₹{car.originalPrice}
                      </div>{" "}
                      <div className="text-success">
                        ₹{car.discountedPrice}
                      </div>{" "}
                      <small className="text-danger">
                        Save ₹{car.savings}
                      </small>
                    </div>
                    <p className="mt-2">Distance: {car.distance}</p>
                    <button type="submit" className="explorebutton mt-4" onClick={()=> navigate('/confirmbooking')} >
                       <span></span>Select
                     </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
