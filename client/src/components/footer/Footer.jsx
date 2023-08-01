import "./footer.css";

const Footer = () => {
  return(
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">

            {/* left side */}
            {/* <div className="flexColCenter"> */}
            <div className="flexColStart f-left">
            <div className="title">
            
           <h2 className="t-head">Axiobooking</h2>
          </div>
               <span className="secondaryText">
                Our vision is to make all people <br/>
                the best place to live for them.
               </span>
            </div>

    

        <div className="flexColStart f-right">
             <span className="primaryText">Information</span>
             <span className="secondaryText">145 Madurai</span>
     
        <div className="flexCenter f-menu">
            <span>property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About us</span>
        </div>
     </div>
        </div>
    </section>
)

};

export default Footer;