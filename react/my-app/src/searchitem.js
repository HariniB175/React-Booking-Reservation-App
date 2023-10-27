import { useState } from "react"
import "./App.css"
const SearchItem =()=>{
    return(
        <div className="searchItem">
        <img src="https://t3.ftcdn.net/jpg/02/71/08/28/360_F_271082810_CtbTjpnOU3vx43ngAKqpCPUBx25udBrg.jpg " alt="" className="siImg"></img>
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Studio Apartment with Air conditioning</span>
            <span className="siSubTitle">Entire studio * 1 bathroom * 21m^2 1 full bed</span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">You can cancel later,so lock in this great price today!</span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
        <div className="siDetailsTexts">
            <span className="siPrice">$123</span>
            <span className="siTaxOp">Include taxes and fees</span>
          <a href="http://localhost:3000/hotels/:id"> <button className="siCheckButton">See availability</button></a>
        </div>
        </div>
        </div>
    )
}
export default SearchItem