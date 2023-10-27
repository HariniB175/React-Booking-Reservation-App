import { useLocation } from "react-router-dom"
import Header from "./header"
import Nav from "./nav"
import { useState } from "react"
import "./App.css"
import {DateRange} from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import{format} from "date-fns"
import SearchItem from "./searchitem"


const List=()=>{
    const location=useLocation()
    const[destination,setDestination]=useState(location.state.destination)
    const[date,setDate]=useState(location.state.date)
    const[openDate,setOpenDate]=useState(false)
    const[Options,setOptions]=useState(location.state.Options)


    return(
        <div>
           <Nav/>
           <Header type="list"/>
           <div className="listContainer">
           <div className="listWrapper">
           <div className="listSearch">
           <div className="listTitle">Search</div>
           <div className="lsItem">
           <label>Destination</label>
           <input placeholder={destination} type="text"></input>
           </div>
           <div className="lsItem">
           <label>Check in Date</label>
           <span onClick={()=>setOpenDate(!openDate)}> {`${format(date[0].startDate, "MM/dd/yyyy")} to 
           ${format(date[0].endDate, "MM/dd/yyyy")} `}
           </span>
           {openDate && ( 
            <DateRange onchage={(item)=>setDate([item.selection])}  
            minDate={new Date()}
           ranges={date}></DateRange>
           )}
           </div>
           <div className="lsItem">
            <label>Options</label>
            <div className="lsOption">
            <div className="lsOptionItem">
            <span className="lsOptionText">
            Min price<small> per night</small></span>
            <input type="number" className="lsOptionInput"></input>
            </div>
            <div className="lsOptionItem">
            <span className="lsOptionText">
            Max price<small> per night</small></span>
            <input type="number" className="lsOptionInput"></input>
            </div>
            <div className="lsOptionItem">
            <span className="lsOptionText">
            Adult</span>
            <input type="number" min={1} className="lsOptionInput" placeholder={Options.adult}></input>
            </div>
            <div className="lsOptionItem">
            <span className="lsOptionText">
            Children</span>
            <input type="number" min={0} className="lsOptionInput" placeholder={Options.children}></input>
            </div>
            <div className="lsOptionItem">
            <span className="lsOptionText">
            Room</span>
            <input type="number" min={1} className="lsOptionInput" placeholder={Options.room}></input>
            </div>
           </div>
           </div>
           <button>Search</button>
           </div>

            <div className="listResult">
            <SearchItem></SearchItem>
            <SearchItem></SearchItem>
            <SearchItem></SearchItem>
            <SearchItem></SearchItem>
            <SearchItem></SearchItem>
            <SearchItem></SearchItem>
            <SearchItem></SearchItem>
            <SearchItem></SearchItem>
            <SearchItem></SearchItem>

           </div>

           </div>
           </div>
        </div>
    )
}
export default List