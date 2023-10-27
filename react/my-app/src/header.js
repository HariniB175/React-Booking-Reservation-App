import { useState } from "react"
import "./App.css"
import {DateRange} from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import{format} from "date-fns"
import { useNavigate } from "react-router-dom";

// function Header(){
    const Header=({type})=>{
        const[destination,setDestination]=useState("")
        const[openDate,setOpenDate]=useState(false)
        const[date,setDate]=useState([
            {
                startDate:new Date(),
                endDate:new Date(),
                key:'selection'
            }
        ]);
        const[openOptions,setOpenOption]=useState(false)
        const[Options,setOptions]=useState({
            adult:1,
            children:0,
            room:1
        })

        const navigate=useNavigate()

        const handleOption=(name,operation)=>{
            setOptions(prev=>{return{
                ...prev, [name]: operation === "i"?Options[name] + 1:Options[name]-1,
            };
        });
        };
        const handleSearch=()=>{
            navigate("/hotels",{ state:{destination, date, Options }})
        }

    return(
        <div>

<div className="header">
<div className="headercontainer">
<div className="headerList">
    <div className="headerListItem active">
    <i class="fa-solid fa-bed"></i>
    <span>Stays</span>
    </div>
    <div className="headerListItem">
    <i class="fa-solid fa-plane"></i>
    <a href="https://www.makemytrip.com/flights/?gclid=CjwKCAjw-eKpBhAbEiwAqFL0mumyXtueNJUJdZaz1EH3KtmpTawdy492YxR_wlkbA31i2ut7CCIDRhoCInYQAvD_BwE&cmp=SEM|D|DF|G|Generic|Generic-Generic_DT|DF_Generic_Exact|RSA|Offer3|673438880768&s_kwcid=AL!1631!3!673438880768!e!!g!!flight%20ticket%20booking&ef_id=CjwKCAjw-eKpBhAbEiwAqFL0mumyXtueNJUJdZaz1EH3KtmpTawdy492YxR_wlkbA31i2ut7CCIDRhoCInYQAvD_BwE:G:s">
    <span className="flight">Flights</span>
    </a>
    </div>
    <div className="headerListItem">
    <i class="fa-solid fa-car"></i>
    <a href="https://www.booking.com/cars/airport/br/the.en.html?aid=1720346&affiliateCode=booking-cars&adplat=booking-google&label=the:mdYBWCtF3_cH4puUMIPn_xeQ:tyS:cr400100044238:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-297251167889:lp1007811:li:dec:dm:ws&gclid=CjwKCAjw-eKpBhAbEiwAqFL0mmM76_j1S26sURaAsFhZpvB5-cz0FVIl-8rYZuD9uK3VbcXU7tFzRxoCyM4QAvD_BwE">
    <span className="flight">Car rental</span>
    </a>
    </div>
    <div className="headerListItem">
    <i class="fa-solid fa-bed"></i>
    <a href="http://localhost:3000/hotels/:id">
    <span className="flight">Attractions</span>
    </a>
    </div>
    <div className="headerListItem">
    <i class="fa-solid fa-taxi"></i>
    <a href="https://www.goibibo.com/cars/airport-cabs/?gclid=CjwKCAjw-eKpBhAbEiwAqFL0mqAq0JLPwnS3EMr0BQfX2E801c363soDMkkCWzhg5NoK2ONl8vwA9xoCN0IQAvD_BwE&utm_source=google&utm_medium=cpc&utm_campaign=Gocar-DSA-Generic&campaign=&ef_id=Y47wpwABVGyJ6gAe:20231026063522:s">
    <span className="flight">Airport taxis</span>
    </a>
    </div>
</div>
{type !== "list" &&
<>
<h1 className="headerTitle">A Lifetime of discounts?It's Genius</h1>
<p className="headerDesc">Get rewarded for your travels - unlock instant savings of 10% or more with a free lamabooking account</p>
<button className="headerBtn">Sign in / Register</button>
<div className="headerSearch">
<div className="headerSearchItem">
<i class="fa-solid fa-bed"></i> 
<input type="text" placeholder="Where are you going?" className="headerSearchInput" onChange={(e)=>setDestination(e.target.value)}
></input>
</div>
<div className="headerSearchItem">
<i class="fa-solid fa-calendar-days"></i>
<span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
{openDate && <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
//   showSelectionPreview={true}
  moveRangeOnFirstSelection={false}
  ranges={date}
  className="date"
  minDate={new Date()}
/>}
</div>
<div className="headerSearchItem">
<i class="fa-solid fa-person"></i>
<span onClick={()=>setOpenOption(!openOptions)} className="headerSearchText">{`${Options.adult} adult . ${Options.children} children . ${Options.room} room`}</span>
{openOptions && <div className="options">
<div className="optionItem">
<span className="optionText">Adult</span>
<div className="optionCounter">
<button disabled={Options.adult<=1} className="optionCounterButton" onClick={()=>handleOption("adult","d")}>-</button>
<span className="optionCounterNumber">{Options.adult}</span>
<button className="optionCounterButton" onClick={()=>handleOption("adult","i")}>+</button>
</div>
</div>

<div className="optionItem">
<span className="optionText">Children</span>
<div className="optionCounter">
<button disabled={Options.children<=0} className="optionCounterButton" onClick={()=>handleOption("children","d")}>-</button>
<span className="optionCounterNumber">{Options.children}</span>
<button className="optionCounterButton" onClick={()=>handleOption("children","i")}>+</button>
</div>
</div>

<div className="optionItem">
<span className="optionText">Room</span>
<div className="optionCounter">
<button disabled={Options.room<=1} className="optionCounterButton" onClick={()=>handleOption("room","d")}>-</button>
<span className="optionCounterNumber">{Options.room}</span>
<button className="optionCounterButton" onClick={()=>handleOption("room","i")}>+</button>
</div>
</div>


</div>}
</div>
<div className="headerSearchItem">
<button className="headerBtn" onClick={handleSearch}>Search</button>
</div>

</div></>}

</div>

</div>
</div>
    )
}
export default Header