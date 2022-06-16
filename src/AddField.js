import React from 'react'
import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import FieldTypeInfo from './FieldTypeInfo';
import FieldGroupInfo from './FieldGroupInfo';
import FamilyTaggingInfo from './IncludeFamTagInfo';


function AddField(props) {
  const [buttonAddField, setButtonAddField] = useState(false);
  const [buttonFieldTypeInfo, setButtonFieldTypeInfo] = useState(false);
  const [buttonFieldGroupInfo, setButtonFieldGroupInfo] = useState(false);
  const [buttonFamilyTaggingInfo, setButtonFamilyTaggingInfo] = useState(false);

  const [name, setName] = React.useState("");
  const handleNameVal = evt => {
    const nameVal = evt.target.value.replace(
      /[#&]/g,
      // /[^a-zA-Z\s0-9]/g,
      ""
    );
    setName(nameVal);
  };



    const [showhide, setShowhide]=useState('');
    
     const handleshowhide=(event)=>{
       const showGroup = event.target.value;    
       setShowhide(showGroup);
  
     }
     const [hideDisabled, setDisabled]=useState('');
     
     const handleDisabled=(event)=>{
      const hideDisabled = event.target.value;    
      setDisabled(hideDisabled);
 
    }



    return (props.trigger) ? (
      <div className='popup fixed flex top-0 left-0 w-full h-screen justify-center items-center'>
      <div className='popup-inner relative bg-white w-full max-w-2xl '>
      <Tooltip title="Close" arrow><button className="close-btn absolute top-4 right-4 bg-white font-semibold py-2 px-4" onClick={() => props.setTrigger(false)}>X</button></Tooltip>
        <div trigger={buttonAddField} setTrigger= {setButtonAddField}>
        <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200">
          <h5 className="text-lg font-medium leading-normal text-gray-800" id="exampleModalLabel">Create New Field</h5>    
        </div>

        <div className="modal-body relative p-4">
            <div className='font-semibold text-xl'> Settings</div>
            
            <div className='grid grid-cols-3 grid-rows-6 gap-3 mt-2 ml-4'>

                <div className='col-span-1 flex text-sm'>Name: </div> 
               <div className='col-span-2'>
                  <input type="text" value={name} onChange={handleNameVal} className=' text-sm mt-1 pl-1 appearance-none rounded block w-4/5 border border-grey-500 shadow-sm focus:outline-none focus:border-dark-blue focus:ring-dark-blue focus:ring-0 focus:drop-shadow-blue' ></input> 
                  
               </div>


                <div className='col-span-1 flex text-sm content-around'>Scope: </div>
                <select className='col-span-2 text-sm mt-1 rounded block w-4/5 border border-grey-500 shadow-sm focus:outline-none focus:border-dark-blue focus:ring-dark-blue focus:ring-0' onChange={(e)=>(handleDisabled(e))}>
                <option value="0">Global</option>
                <option value="a">Local</option>
                </select>

                <div className='col-span-1 flex text-sm content-around'>Field Type: <button onClick={() => setButtonFieldTypeInfo (true)} className='ml-1 text-dark-blue'><i class="fa-solid fa-circle-info"></i></button></div>
                <select className='col-span-2 text-sm mt-1 rounded block w-4/5 border border-grey-500 shadow-sm focus:outline-none focus:border-dark-blue focus:ring-dark-blue focus:ring-0' onChange={(e)=>(handleshowhide(e))}>
                  <option value="0">Yes/No</option>
                  <option value="0">Text</option>
                  <option value="0">Date</option>
                  <option value="0">Number</option>
                  <option value= "1">Select</option>
                  <option value= "2">Multi-Select</option>
                </select>



                <div className='col-span-1 flex text-sm content-around'>Field Group: <button onClick={() => setButtonFieldGroupInfo (true)} className='ml-1 text-dark-blue'><i class="fa-solid fa-circle-info"></i></button> </div>
                <select className='col-span-2 text-sm mt-1 rounded block w-4/5 border border-grey-500 shadow-sm focus:outline-none focus:border-dark-blue focus:ring-dark-blue focus:ring-0' disabled= {hideDisabled === "a"}>
                  <option>Global</option>
                </select>

                
             <input type="checkbox" id="quickSearch" name="quickSearch" value="quick" class="col-span-1 border-1 border-grey-300 shadow-sm h-3.5 w-3.5 mt-2" />
              <div className='col-span-2 flex text-sm content-around'>Quick Search</div>
               

                
                
                <input type="checkbox" id="includeFamily" name="includeFamily" value="include" class="col-span-1 border-1 border-grey-300 shadow-sm h-3.5 w-3.5 mt-2" />
                <div className='col-span-2 flex text-sm content-around'>Include Family (tagging) <button onClick={() => setButtonFamilyTaggingInfo (true)} className='ml-1 text-dark-blue'><i class="fa-solid fa-circle-info"></i></button></div>
                
                                           
            </div>

             {
              showhide >= "1" && <div className='mt-5'> 
                <div className='font-semibold'>Select Options</div>
                   <div className='place-content-center flex mt-2' >
                     
                        <div className='mt-1 text-sm'>Name:</div>
                        <div className='ml-2 flex'>
                          <input type="text" maxLength={250} className=' text-sm mt-1 pl-1 appearance-none rounded block border border-grey-500 shadow-sm focus:outline-none focus:border-dark-blue focus:ring-dark-blue focus:ring-0 focus:drop-shadow-blue' ></input>
                          <button className='ml-2 rounded border border-grey-200 text-xs px-1 bg-gradient-to-r from-dark-blue to-light-blue text-white shadow-sm focus:outline-none focus:border-dark-blue focus:ring-dark-blue focus:ring-0'> Apply </button>
                        </div>
                        
                     
                   </div>
                   <div className='text-xs text-gray-400'>(250 char max)</div>
              </div> 
            }


            <div className='flex justify-end mt-8'>
              <button onClick={() => props.setTrigger(false)} className='rounded border border-grey-200 py-1 px-2.5 mr-2 text-light-blue hover:text-dark-blue shadow-sm focus:outline-none focus:border-dark-blue focus:ring-dark-blue focus:ring-0'> Cancel </button>
              <button className='rounded border border-grey-200 py-1 px-2.5 bg-gradient-to-r from-dark-blue to-light-blue text-white shadow-sm focus:outline-none focus:border-dark-blue focus:ring-dark-blue focus:ring-0'> Update </button>
            </div>
            <FieldTypeInfo trigger={buttonFieldTypeInfo} setTrigger= {setButtonFieldTypeInfo}/>
            <FieldGroupInfo trigger={buttonFieldGroupInfo} setTrigger= {setButtonFieldGroupInfo}/>
            <FamilyTaggingInfo trigger={buttonFamilyTaggingInfo} setTrigger= {setButtonFamilyTaggingInfo}/>
        </div>
         </div>


        {props.children}
      </div>
    </div>
    ) :"";
  }

export default AddField


