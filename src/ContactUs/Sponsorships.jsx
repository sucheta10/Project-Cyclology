import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Navbar2 from '../Components/Navbar2'


function Sponsorships() {

  const Check = false;
  
  return (
    <div className=''>
    {Check ? <Navbar /> : <Navbar2 />}
      <Footer />
    </div>
  )
}

export default Sponsorships