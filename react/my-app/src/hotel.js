import { useState } from "react"
import "./App.css"
import Footer from "./footer"
import Header from "./header"
import MailList from "./mailList"
import Nav from "./nav"

const Hotel=()=>{
const [slideNumber,setSlideNumber]=useState(0);
const [open,setOpen]=useState(false);

    const photos =[
        {
            src:"https://www.decorilla.com/online-decorating/wp-content/uploads/2021/05/Contemporary-chic-hotel-room-by-one-of-the-top-hotel-interior-designers-Mladen.jpg"
        },
        {
            src:"https://en.idei.club/uploads/posts/2023-08/thumbs/1690895280_en-idei-club-p-simple-hotel-room-dizain-krasivo-9.jpg"
        },
        {
            src:"https://restaurantinteriordesign.eu/wp-content/uploads/2018/11/Tin-Lung-Heen-restaurant-at-Ritz-Carlton-Haikou.jpg"
        },
        {
            src:"https://cdn.marriottnetwork.com/uploads/sites/17/2018/03/The-Chatwal-Luxury-Collection-Hotel-New-York-Garden-Suite-Private-Terrace-1200x630.jpg"
        },

        {
            src:"https://media.istockphoto.com/id/1066999762/photo/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv.jpg?s=612x612&w=0&k=20&c=kh1SoNvZYDdAFOadeKxPVssVKVzbMTIuOHQu-RBDoX0="
        },
        {
            src:"https://i.pinimg.com/originals/1c/05/4d/1c054dbc57aaf6bcc470edef5be117de.png"
        },


    ]
    const handelOpen =(i)=>{
        setSlideNumber(i);
        setOpen(true)
    }
    const handleMove=(direction)=>{
        let newSlideNumber;

        if(direction=="l"){
            newSlideNumber = slideNumber===0 ? 5:slideNumber-1
        }else{
            newSlideNumber = slideNumber===5 ? 0:slideNumber+1

        }

        setSlideNumber(newSlideNumber)
    }
    return(
        <div>
        <Nav></Nav>
        <Header type="list"></Header>
        <div className="hotelContainer">
        {open && <div className="slider">
        <div className="close" onClick={()=>setOpen(false)}><i class="fa-solid fa-circle-xmark" ></i></div>
        <div className="arrow" onClick={()=>handleMove("l")}><i class="fa-solid fa-circle-arrow-left"></i></div>
        <div className="sliderWrapper">
        <img src={photos[slideNumber].src} alt="" className="slideImg"></img>
        </div>
        <div className="arrow" onClick={()=>handleMove("r")}><i class="fa-solid fa-circle-arrow-right"></i></div>
        
        </div>}
        <div className="hotelWrapper">
        <div className="container">
        <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">Grand Hotal</h1>
            <div className="hotelAddress">
            <i class="fa-solid fa-location-dot"></i>
                <span>Elton St 125 New york</span>
            </div>
            <span className="hotelDistance">Excellent location - 500m from center</span>
      <br></br>      <span className="hotelPriceHighLight">
                Book a stay over $114 at this property and get a free airport taxi
            </span>
            <div className="hotelImages">
                {photos.map((photo,i) =>(
                    <div className="hotelImgWrapper">
                        <img onClick={()=>handelOpen(i)} src={photo.src} alt="" className="hotelImg"></img>
                    </div>
                ))}
            </div>
            <div className="hotelDetails">
            <div className="hotelDetailsTexts">
            <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
                <p className="hotelDesc">
                    Located a 5-minute walk from st.Floraian's Gate in karakow,Tower
                    Street Apartments has accommodation with air conditioning and free wifi air conditioning and
                    free WiFi .Yhe units come ith hardwood floors and feature a fuly equipped kitchenette with a microwave, a flate-screen Tv,
                    and a private bathroom with shower and  a hairdryer.A fridge is also offered
                    as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include cloth Hall,
                    Main Market Stower Square and Toen Hall Tower. The nearest airport is John Paul II International Krakow-Balice,
                    16.1 Km from Tower Street Apartments,and the property offers a paid airport shuttle service.
                </p>
            </div>
            <div className="hotelDetailsPrice">
               <h1>Perfect for a 9-night stay!</h1>
               <span>
                Located in the real heart of Krakow,this property has an excellent locatiob score of 98!
               </span> 
               <h2>
                <b>$945</b>(9 nights)
               </h2>
               <button>Reserevr or Book Now!</button>
            </div>
            </div>

        </div>
        </div>
        <MailList></MailList>
        <Footer></Footer>
        </div>
        </div>
        
    )
}
export default Hotel