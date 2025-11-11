import React from 'react'
import NavBar from './components/Header'
import MenuList from './components/MenuList'
import menu from './data/menu'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  return (
    <>

      <Header />

      <h2 className='text-4xl text-orange-900 font-semibold text-center m-15'>Menulist</h2>
      <hr className='mx-30' />

      <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
        {menu.map((food) => (
          <MenuList title={food.title} description={food.description} image={food.image} price={food.price}/>
        ))}
      </div>
    </div>

      <Footer />

    </>
  )
}

export default App