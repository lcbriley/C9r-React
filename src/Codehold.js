const [buttonPopup, setButtonPopup] = useState(false);

<div className="App">
      <header className="">
       
      <script src="https://kit.fontawesome.com/1348f1f9e7.js" crossorigin="anonymous"></script>

        
      </header>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setButtonPopup(true)}>Open Popup</button>

      <Popup trigger={buttonPopup} setTrigger= {setButtonPopup}>
      {/*<DragDropContext>
  <Droppable>*/}
        <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200">
          <h5 className="text-lg font-medium leading-normal text-gray-800" id="exampleModalLabel">Modify Fields</h5>    
        </div>
        <div class="modal-body relative p-4">
          <div className='add-btns flex justify-end'>
            <button className='inline-flex mr-3'><img src="img/stack.png" alt="" className="h-7"/> Add Group
            </button>
            <button className='inline-flex '><img src="img/addfield.png" alt="" className="h-7"/> Add Field
            </button>
          </div>
          <div className='levels mt-4'>
            <div className='global-section border-b text-left py-3 justify-between flex'>
            <div className='justify-start space-x-4 flex'>
              <div className=''><i class="fa-solid fa-bars"></i></div>
                  <div>Global <span className='rounded-full bg-blue-500 text-white px-1.5 rounded-xl text-sm ml-1'>3</span></div>
            </div>
                <div className=''> 
                <button className='mr-3'><img src="img/icons8-eye-50.png" alt="" className="h-5"/></button>
                    <button className='mr-3'><img src="img/icons8-arrow-up-50.png" alt="" className="h-5"/></button>
                    <button className='mr-3'><img src="img/icons8-collapse-arrow-50.png" alt="" className="h-5 rotate-180"/></button>

                </div>
            </div>
            <div className='global-section border-b text-left py-3 justify-between flex'>
            <div className='justify-start space-x-4 flex'>
              <div className=''><i class="fa-solid fa-bars"></i></div>
                  <div>Private <span className='rounded-full bg-blue-500 text-white px-1.5 rounded-xl text-sm ml-1'>4</span></div>
            </div>
                <div className='inline-flex'> 
                    <button className='mr-3'><img src="img/icons8-eye-50.png" alt="" className="h-5"/></button>
                    <button className='mr-3'><img src="img/icons8-arrow-up-50.png" alt="" className="h-5"/></button>
                    <button className='mr-3'><img src="img/icons8-collapse-arrow-50.png" alt="" className="h-5 rotate-180"/></button>

                </div>
            </div>
            <div className='global-section border-b text-left py-3 justify-between flex'>
            <div className='justify-start space-x-4 flex'>
              <div className=''><i class="fa-solid fa-bars"></i></div>
                  <div>System <span className='rounded-full bg-blue-500 text-white px-1.5 rounded-xl text-sm ml-1'>7</span></div>
            </div>
                <div className='inline-flex'> 
                    <button className='mr-3'><img src="img/icons8-eye-50.png" alt="" className="h-5"/></button>
                    <button className='mr-3'><img src="img/icons8-arrow-up-50.png" alt="" className="h-5"/></button>
                    <button className='mr-3'><img src="img/icons8-collapse-arrow-50.png" alt="" className="h-5 rotate-180"/></button>

                </div>
            </div>

          </div>
        </div>