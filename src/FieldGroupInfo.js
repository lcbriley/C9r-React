import React from 'react'
import { useState } from 'react';
//import Tooltip from '@mui/material/Tooltip';




function FieldGroupInfo(props) {
    const [buttonFieldGroupInfo, setButtonFieldGroupInfo] = useState(false);
    return (props.trigger) ? (
      <div className='popup fixed flex top-0 left-0 w-full h-screen justify-center items-center'>
        <div className='popup-inner relative bg-white w-full max-w-2xl '>
          <button className="close-btn absolute top-4 right-4 bg-white font-semibold py-2 px-4" onClick={() => props.setTrigger(false)}>X</button>
          <div trigger={buttonFieldGroupInfo} setTrigger= {setButtonFieldGroupInfo}>
          <div className="modal-header flex p-4 border-b border-gray-200">
            <h5 className="text-lg font-medium leading-normal text-gray-800" id="exampleModalLabel">Field Group Definition</h5>    
          </div>
          
          <div className="modal-body relative p-4 text-left ml-2">

            <div className='border-b pb-3 flex '>
            <div className='mt-1 text-sm text-center'>Field Groups- Enables you to quickly perform actions and avoid errors on critical decisions by grouping related fields. These customized groups are readily available within the review metadata view.</div> 
              
            </div>

                <div className='global-section border-b text-left py-3 justify-between flex'>

                    <div className='justify-start space-x-4 flex'>
                        <div className=''><i class="fa-solid fa-bars"></i> System <span className='text-red-500'>*</span></div>  
                    </div>
                    <div className='inline-flex'>
                         <button className='mr-3' ><i class="fa-solid fa-angle-down"></i> </button>
                    </div>
                </div>

                <div className='global-section border-b text-left py-3 justify-between flex'>

                <div className='justify-start space-x-4 flex'>
                    <div className=''><i class="fa-solid fa-bars"></i> Default <span className='text-red-500'>*</span></div>  
                </div>
                <div className='inline-flex'>
                     <button className='mr-3' ><i class="fa-solid fa-angle-down"></i> </button>
                </div>
            </div>

            <div className='global-section border-b text-left py-3 justify-between flex'>

            <div className='justify-start space-x-4 flex'>
                <div className=''><i class="fa-solid fa-bars"></i> Local <span className='text-red-500'>*</span></div>  
            </div>
            <div className='inline-flex'>
                 <button className='mr-3' ><i class="fa-solid fa-angle-down"></i> </button>
            </div>
        </div>

        <div className='global-section border-b text-left py-3 justify-between flex'>

        <div className='justify-start space-x-4 flex'>
            <div className=''><i class="fa-solid fa-bars"></i> Coding Group 1 </div>  
        </div>
        <div className='inline-flex'>
             <button className='mr-3' > <i class="fa-solid fa-angle-up"></i> </button>
        </div>
    </div>

    <div className='global-section border-b text-left py-3 justify-between flex'>

        <div className='justify-start space-x-4 flex'>
            <div className=''> Unresponsive </div>  
        </div>
        
    </div>

    <div className='global-section border-b text-left py-3 justify-between flex'>

    <div className='justify-start space-x-4 flex'>
        <div className=''><i class="fa-solid fa-bars"></i> Coding Group 2 </div>  
    </div>
    <div className='inline-flex'>
         <button className='mr-3' > <i class="fa-solid fa-angle-up"></i> </button>
    </div>
</div>

<div className='global-section border-b text-left py-3 justify-between flex'>

    <div className='justify-start space-x-4 flex'>
        <div className=''> Responsive </div>  
    </div>
    
</div>

            
         <div className='text-xs mt-2'>Note- groups with '<span className='text-red-500'>*</span>' are standard for all projects</div>   

            

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

export default FieldGroupInfo