import React from 'react'
import './Popup.css'

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup fixed flex top-0 left-0 w-full h-screen justify-center items-center'>
      <div className='popup-inner relative bg-white w-full max-w-2xl '>
        <button className="close-btn absolute top-4 right-4 bg-white font-semibold py-2 px-4" onClick={() => props.setTrigger(false)}>X</button>
        {props.children}
      </div>
    </div>
  ) :"";
}

export default Popup


