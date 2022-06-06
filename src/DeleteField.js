import React from 'react'
import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';


function DeleteField(props) {
  const [buttonDeleteField, setButtonDeleteField] = useState(false);
    return (props.trigger) ? (
      <div className='popup fixed flex top-0 left-0 w-full h-screen justify-center items-center'>
        <div className='popup-inner relative bg-white w-full max-w-2xl '>
          <button className="close-btn absolute top-4 right-4 bg-white font-semibold py-2 px-4" onClick={() => props.setTrigger(false)}>X</button>

          <div trigger={buttonDeleteField} setTrigger= {setButtonDeleteField}>
                    <div className="modal-header p-4 border-b flex border-gray-200">
                      <h5 className="text-lg font-medium leading-normal text-gray-800" id="exampleModalLabel">Delete Field</h5>    
                    </div>

                    <div className="modal-body relative p-4">

                      <div className='text-center text-xl mt-3'><i class="fa-solid fa-triangle-exclamation fa-xl text-red-600"></i> This action is permanent... </div>

                      <div className='mt-6 text-center'>Are you sure you want to delete: USER CREATED Field 1</div>

                      <div className='flex justify-end mt-8'>
                        <button className='rounded border border-grey-200 py-1 px-2.5 mr-2 text-light-blue hover:text-dark-blue shadow-sm focus:outline-none focus:border-dark-blue focus:ring-dark-blue focus:ring-0'> Cancel </button>
                        <button className='rounded border border-grey-200 py-1 px-2.5 bg-gradient-to-r from-dark-blue to-light-blue text-white shadow-sm focus:outline-none focus:border-dark-blue focus:ring-dark-blue focus:ring-0'> Continue </button>
                      </div>
                    </div>


                  </div>
          {props.children}
        </div>
      </div>
    ) :"";
  }

export default DeleteField