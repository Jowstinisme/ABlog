import React from 'react'
import jonsDog from "../../assets/Jonsfuckassdog.jpg"

function Homepage() {
  return (
    <div className = "homepage">
        <h1 className = "homepageTitle">Welcome to the my Blog!</h1>
        <img className="jonsdog" src={jonsDog}></img>
    </div>
  )
}

export default Homepage