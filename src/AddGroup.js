import React from 'react'
import './AddGroup.css'

function AddGroup(props) {
  
    return (props.trigger) ? (
      <div className='add-popup fixed flex top-0 left-0 w-full h-screen justify-center items-center'>
        <div className='add-popup-inner relative bg-white w-full max-w-2xl '>
          <button className="close-btn absolute top-4 right-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow" onClick={() => props.setTrigger(false)}>X</button>
          {props.children}
        </div>
      </div>
    ) :"";
  }

export default AddGroup