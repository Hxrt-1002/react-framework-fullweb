import React from 'react'

const Header = () => {
  return (
    <>
        <header className='bg-gradient-to-r from-orange-400 to-orange-200 text-black shadow-lg'>
            <div className='container mx-auto px-2 py-7'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-2'>
                        <h1 className='text-2xl text-orange-900 font-bold hover:text-black transition-all duration-200'>
                            BBRestaurant
                        </h1>
                    </div>
                    <nav>
                        <ul className='flex space-x-14'>
                            <li>
                                <a href="#" className='relative text-orange-900 after:absolute after:-bottom-1 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-orange-900 after:transition-all after:duration-300 hover:after:w-full'>Home</a>
                            </li>
                            <li>
                                <a href="#" className='relative text-orange-900 after:absolute after:-bottom-1 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-orange-900 after:transition-all after:duration-300 hover:after:w-full'>Menu</a>
                            </li>
                            <li>
                                <a href="#" className='relative text-orange-900 after:absolute after:-bottom-1 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-orange-900 after:transition-all after:duration-300 hover:after:w-full'>Contact</a>
                            </li>
                            <li>
                                <a href="#" className='relative text-orange-900 after:absolute after:-bottom-1 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-orange-900 after:transition-all after:duration-300 hover:after:w-full'>Setting</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header