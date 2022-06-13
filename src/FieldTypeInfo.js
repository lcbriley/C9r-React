import React from 'react'
import { useState } from 'react';
//import Tooltip from '@mui/material/Tooltip';




function FieldTypeInfo(props) {
    const [buttonFieldTypeInfo, setButtonFieldTypeInfo] = useState(false);
    return (props.trigger) ? (
      <div className='popup fixed flex top-0 left-0 w-full h-screen justify-center items-center'>
        <div className='popup-inner relative bg-white w-full max-w-2xl '>
          <button className="close-btn absolute top-4 right-4 bg-white font-semibold py-2 px-4" onClick={() => props.setTrigger(false)}>X</button>
          <div trigger={buttonFieldTypeInfo} setTrigger= {setButtonFieldTypeInfo}>
          <div className="modal-header flex p-4 border-b border-gray-200">
            <h5 className="text-lg font-medium leading-normal text-gray-800" id="exampleModalLabel">Field Definitions</h5>    
          </div>
          
          <div className="modal-body relative p-4 text-left ml-2">

            <div className='border-b pb-3 flex '>
            <div className='mt-3'><i class="fa-solid fa-calendar-days fa-2xl text-dark-blue"></i></div> 
               <div className='ml-4'>
                    <span className=''>Date Format</span>
                    <div className='text-xs '> MM/DD/YYYY</div> 
                    <div className='text-xs '>(example: 10/23/1999)</div> 
               </div>
            </div>

            <div className='border-b pb-3 flex mt-2'>
            <div className='mt-3'><i class="fa-solid fa-square-check fa-2xl mt-4 text-dark-blue"></i></div> 
                <div className='ml-4'>
                    <span className=''>Yes/No</span> 
                    <div className='text-xs '>A field that is either on or off</div> 
                    <div className='text-xs '>(An example of this would be 'Privileged' field.)</div> 
                </div>
            </div>

            <div className='border-b pb-3 flex mt-2'>
            <div className='mt-2'><i class="fa-solid fa-hashtag fa-2xl mt-4 text-dark-blue"></i></div> 
                <div className='ml-4'>
                    <span className=''>Number</span> 
                    <div className='text-xs '>Values can range from +/- 2 billion</div>
                </div> 
            </div>

            <div className='border-b pb-3 flex mt-2'>
            <div className='mt-2'><i class="fa-solid fa-a fa-2xl mt-4 text-dark-blue"></i></div> 
                <div className='ml-4'>
                    <span className=''>Text</span> 
                    <div className='text-xs '>Can hold almost any type of information</div> 
                    <div className='text-xs '>(maximun length is 4000 characters)</div> 
                </div>
            </div>

            <div className='border-b pb-3 flex mt-2'>
            <div className='mt-2'><i class="fa-solid fa-list fa-2xl mt-4 text-dark-blue"></i></div>
                <div className='ml-4' >
                    <span className=''>Select</span> 
                    <div className='text-xs '>Enter a value to appear in the select drop down box</div> 
                    <div className='text-xs '>(250 character maximum)</div>
                </div> 
            </div>

            <div className='border-b pb-3 flex mt-2'>
            <div className='mt-2'><i class="fa-solid fa-list-check fa-2xl mt-4 text-dark-blue"></i></div> 
               <div className='ml-4'>
                    <span className=''>Multi-Select</span> 
                    <div className='text-xs '>Enter a value to appear in the select drop down box</div> 
                    <div className='text-xs '>(250 character maximum)</div> 
               </div>
            </div>
            

            

            <div className='flex justify-end mt-6'>
                <button onClick={() => props.setTrigger(false)} className='rounded border border-grey-200 py-1 px-2.5 mr-2 text-light-blue hover:text-dark-blue shadow-sm focus:outline-none focus:border-dark-blue focus:ring-dark-blue focus:ring-0'> Close </button>
                
            </div>
          </div>


        </div>
         
          {props.children}
        </div>
      </div>
    ) :"";
  }

export default FieldTypeInfo