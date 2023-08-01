import "./mailList.css"

const MailList = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innerwidth g-container">
            <div className="flexColCenter inner-container">
                <span className="primaryText">Get started with Axiobooking</span>
                <span className="secondaryText">subscribe and find suitable and confortable hotels with min price
                    <br></br>
                    Find your hotel soon
                </span>
               <button className="button">
                <a href="mailto:ratnakumar48070@gmail.com">Get Started</a>
               </button>
            </div>
        </div>
       </section>
  )
}

export default MailList