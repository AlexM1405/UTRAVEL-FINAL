import React from 'react'
import Footer from "./Footer.jsx"
import Common_Userpage from "./Common_Userpage.jsx"
import "./Userpage.css"
import Providers from './Providers.jsx'
import ProvidersManager from './ProvidersManager.jsx'
import POS from './Pos.jsx'
import CustomerForm from './CustomerForm.jsx'

function Userpage() {
  return (
    <>
        <Common_Userpage/>
        <div className='Container-userpage'>
        <h2>Welcome to your personalized journey hub!</h2>
        <p>we're here to turn your travel dreams into reality. Navigate through exclusive itineraries, handpicked recommendations, and seamless planning tools—all designed to make your adventure extraordinary. Let's embark on a unique travel experience tailored just for you!</p>
        <h1>Our Tours</h1>
        <Providers/>
        <h1>Our POS</h1>
        <POS/>
        <h1>Our Providers</h1>
        <ProvidersManager/>
        <h1>Our Costumers</h1>
        <CustomerForm/>
        </div>
        <Footer/>
    </>

    
  )
}

export default Userpage