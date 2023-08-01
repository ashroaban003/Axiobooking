import Header from "../../components/header/Header"
import Featured from "../../components/featured/Featured"
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperty from "../../components/featuredProperty/FeaturedProperty";
import MailList from "../../components/mailList/MailList";
import './home.css'
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Contacts from "../../components/Contacts/Contacts";
import Value from "../../components/Values/Value";
import Residencies from "../../components/Residencies/Residencies";
export default function Home() {
    return(
       <div className="homewrap">
          <Navbar/>
          <Header />
          
          <div className="homeContainer">
             {/* <Featured/> */}
              <Residencies/>
             {/* <h1 className="homeTitle">Browse by property type</h1>
             <PropertyList/> */}
             <Value/>
             {/* <h1 className="hometitle">Homes guests love</h1>
             <FeaturedProperty/> */}
             <Contacts/>
             <MailList/>
             <Footer/>
          </div>
       </div>
    )
};
