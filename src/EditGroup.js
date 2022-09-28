import React from 'react'
import { useState } from 'react';
import { FieldList } from './FieldList';
import { Groups } from './Groups';
//import Tooltip from '@mui/material/Tooltip';


function EditGroup(props) {
  const [buttonEditGroup, setButtonEditGroup] = useState(false);

  const [cat, setCat] = useState(FieldList);

  const catSort = () => {
    let catArray = FieldList;
    //console.log(catArray);
    catArray.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }

      return 0;
    });
    setCat({ ...cat, FieldList: catArray });

    console.log(catArray);
  };

  //Sort Z-A
  const [catZ, setCatZ] = useState(FieldList);
  const catSortZ = () => {
    let catArrayZ = FieldList;
    //console.log(catArrayZ);
    catArrayZ.sort(function (a, b) {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }

      return 0;
    });
    setCatZ({ ...catZ, FieldList: catArrayZ });

    //console.log(catArrayZ);
  };

  //Selected Count
  const [isCount, setIsCount] = useState([]);

  //Search Feature / Creating tag list
  const [searchQ, setSearchQ] = useState('');
  //console.log(isCount);
  const catalog = FieldList.filter((user) =>
    user.name.toLowerCase().includes(searchQ)
  ).map(({ id, name, i }, index) => {
    return (
      <div key={id} className="mt-2 ml-3 flex">
        <input
          key={i}
          type="checkbox"
          name={name}
          id={id}
          //value="include"
          onChange={() => toggleCheck(id)}
          checked={isCount.includes(id)}
        />

        <span className="ml-2 align-middle"> {name}</span>
      </div>
    );
  });

  //Select All
  const toggleCheck = (id) => {
    setIsCount((selectedItems) => {
      if (selectedItems.includes(id)) {
        return selectedItems.filter((f) => f !== id);
      }

      return [...selectedItems, id];
    });
  };
  const selectAll = (value) => {
    if (value === true) {
      setIsCount(FieldList.map((f) => f.id));
      return;
    }

    setIsCount([]);
  };








    return (props.trigger) ? (
      <div className='popup fixed flex top-0 left-0 w-full h-screen justify-center items-center'>
        <div className='popup-inner relative bg-white w-full max-w-2xl '>
          <button className="close-btn absolute top-4 right-4 bg-white font-semibold py-2 px-4" onClick={() => props.setTrigger(false)}>X</button>

          <div trigger={buttonEditGroup} setTrigger= {setButtonEditGroup}>
<div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200">
  <h5 className="text-lg font-medium leading-normal text-gray-800" id="exampleModalLabel">Edit: USER CREATED</h5>    
</div>

<div className='modal-body p-4'>

  <div className='flex flex-row'>
    <div className='basis-1/2 flex'>
      <div className=' text-sm font-semibold mt-1.5 mr-2'>Group Name:</div>
      <input type="text" className='mt-1 rounded w-1/2 border border-grey-500 shadow-sm h-7 p-1 focus:outline-none focus:border-dark-blue focus:ring-dark-blue focus:ring-0'></input>
    </div>

    
    <div className='basis-1/2 flex justify-end'>
      <div className=' text-sm mt-1.5 mr-2'>Filter:</div>
      <input type="text" onChange={(e) => setSearchQ(e.target.value)} className='mt-1 rounded w-1/2 border border-grey-500 shadow-sm h-7 p-1 focus:outline-none focus:border-dark-blue focus:ring-dark-blue focus:ring-0'></input>
    </div>        
    
  </div>

  <div className="mt-6 border border-grey-300 h-80 overflow-auto">
  <div className="border-b">
    <div className="text-center p-2 font-semibold">
      Field Selection
    </div>

    <div className="flex justify-between ml-3 mt-1 mb-3">
      <div>
        <input
          type="checkbox"
          onChange={(event) =>
            selectAll(event.currentTarget.checked)
          }
          checked={isCount.length === FieldList.length}
        />
      </div>

      <div>
        <button
          className=""
          onClick={(FieldList) => catSort(FieldList)}
        >
          <i class="fa-solid fa-arrow-down-a-z fa-lg mr-2 p-1"></i>
        </button>
        <button onClick={(FieldList) => catSortZ(FieldList)}>
          <i className="fa-solid fa-arrow-up-z-a fa-lg mr-2 p-1"></i>
        </button>
      </div>

      <div className="mr-5">{isCount.length}</div>
    </div>
  </div>
  <div> {catalog}</div>
</div>

  <div className='flex justify-end mt-8'>
          <button onClick={() => props.setTrigger(false)} className='rounded border border-grey-200 py-1 px-2.5 mr-2 text-light-blue hover:text-dark-blue shadow-sm focus:outline-none focus:border-dark-blue focus:ring-dark-blue focus:ring-0'> Cancel </button>
          <button className='rounded border border-grey-200 py-1 px-2.5 bg-gradient-to-r from-dark-blue to-light-blue text-white shadow-sm focus:outline-none focus:border-dark-blue focus:ring-dark-blue focus:ring-0'> Update </button>
        </div>


</div>

</div>
          {props.children}
        </div>
      </div>
    ) :"";
  }

export default EditGroup