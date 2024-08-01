import React, { useState } from 'react'
import './App.css'

function App() {
  const [allTask, setAllTask] = useState([]);
  const [task, setTask] = useState("");


  function addTask() {
    
  }
  return (
    <>
      <div className='flex flex-col gap-3 bg-gray-200'>
        <div className='bg-blue-500 text-white text-5xl font-extrabold text-center p-2'>TO DO LIST</div>

        <div className='bg-blue-300 p-5 flex flex-row items-center justify-center gap-5'>
          <input 
            className='w-1/2 py-2 px-2 bg-blue-100 rounded' 
            type="text" 
            placeholder='Add your task here' 
          />
          
          <button className='bg-blue-500 px-5 py-2 rounded-lg text-white font-bold active:scale-90 transition-all'>ADD</button>
        </div>

        <div>
          <div className='flex items-center justify-between m-5 p-3 bg-white rounded-lg'>
            <div className='flex items-center gap-2'>
              <input className='h-5 w-5' type="checkbox" />
              <h1 className='font-semibold text-xl'>Have a good day :)</h1>
            </div>
            <div className='flex items-center gap-2'>
              <button className='bg-yellow-500 text-white font-bold rounded-lg py-2 px-5 active:scale-90 transition-all'>EDIT</button>
              <button className='bg-red-500 text-white font-bold rounded-lg py-2 px-5 active:scale-90 transition-all'>DELETE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
