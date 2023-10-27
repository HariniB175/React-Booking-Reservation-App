import "./App.css"
const Featured=()=>{
    return(
        <div className="featured">
            <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1524338198850-8a2ff63aaceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGVyZmFsbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" className="featuredImg"></img>
            <div className="featuredTitles">
            <h1>Dublin</h1>
            <h2>123 properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src="https://workpermit.com/sites/default/files/styles/large/public/22324191185_cf010e09e9_z.jpg?itok=nUorLq-7" alt="" className="featuredImg" ></img>
            <div className="featuredTitles">
            <h1>Austin</h1>
            <h2>532 properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src="https://static.toiimg.com/photo/msid-101267463,width-96,height-65.cms" alt="" className="featuredImg"></img>
            <div className="featuredTitles">
            <h1>Reno</h1>
            <h2>533 properties</h2>
            </div>
        </div>

        </div>
    )
}
export default Featured