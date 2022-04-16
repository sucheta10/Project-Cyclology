import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Navbar2 from '../Components/Navbar2'

function CYCLOFIRECHAT() {

  const Check = false;
  
  return (
    <div className=''>
      {Check ? <Navbar /> : <Navbar2 />}
      <Footer />
    </div>
  )
}

export default CYCLOFIRECHAT