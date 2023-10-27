import Nav from "./nav"
import Header from "./header"
import Featured from "./featured"
import Propertylist from "./propertylist"
import Featuredproperties from "./featuredproperties"
import MailList from "./mailList"
import Footer from "./footer"

function Home(){
    return(
        <div>
                <Nav></Nav>
                <Header></Header>
                <div className="homeContainer">
                    <Featured></Featured>
                    <h1 className="homeTitle">Browse by property type </h1>
                <Propertylist></Propertylist>
                <h1 className="homeTitle">Homes guests love</h1>
                <Featuredproperties></Featuredproperties>
                <MailList></MailList>
                <Footer></Footer>

                </div>

       
        </div>
    )
}
export default Home