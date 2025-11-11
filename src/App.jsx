import React from 'react'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>

      <NavBar/>

      <div className='container '>
        <p className='relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full'>
          hahhahahahaah
        </p>
      </div>
    </>
  )
}

export default App