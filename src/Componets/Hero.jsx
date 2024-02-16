import { Button } from "./Button"
import React from 'react'
import "./Hero.css"
import "../App.css"
import { Link } from "react-router-dom"

function Hero() {
  return (
    <div className="Hero-container">
    <video  src="videos/video-4.mp4"  autoPlay loop muted />
    <h1>READY FOR YOUR NEW ADVENTURE</h1>
    <p> ARE YOU READY??</p>
    <div className="Hero-Btns">
    <Link to='/Services'>
    <Button  
        className="Btns" 
        buttonStyle="Btn--outline" 
        ButtonSize="Btn--large"
        > 
        GET STARTED
        
        <i className="far-fa-play-circle"/>
    </Button> 
    </Link>
  
    </div>
 </div>
  )
}

export default Hero


