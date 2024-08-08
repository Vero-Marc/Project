import React from 'react'

export default function SelectField(props) {
  return (
    <div>
      
            <select
              className="form-control"
              id={props.id}
              name={props.id}
              value={props?.value}
              onChange={props?.handleChange}
            >
              {props?.options.map((item)=>{return ( <> <option value={item.value}>{item.text}</option></> )})} 
           
            </select>
    </div>
  )
}
