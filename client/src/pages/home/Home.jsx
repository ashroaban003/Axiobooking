import Header from "../../components/header/Header"
import Featured from "../../components/featured/Featured"
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperty from "../../components/featuredProperty/FeaturedProperty";
import MailList from "../../components/mailList/MailList";
import './home.css'
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
export default function Home() {
    return(
       <div>
          <Navbar/>
          <Header />
          
          <div className="homeContainer">
             <Featured/>
             <h1 className="homeTitle">Browse by property type</h1>
             <PropertyList/>
             <h1 className="hometitle">Homes guests love</h1>
             <FeaturedProperty/>
             <MailList/>
             <Footer/>
          </div>
       </div>
    )
};
