import React from "react";
import './Contacts.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from "react-icons/hi2"
export default function Contacts(params) {
    return(
        <section className="c-wrapper">
        <div className=" innerWidth flexCenter c-container">

            <div className="flexColstart c-left">
                <div className="flexColStart">
                <span className="orangeText">Our contacts</span>
                <span className="primaryText">Easy to contact us</span>
                <span className="secondaryText">we help u at any time</span>
                </div>
               
                {/* 1st column */}
                <div className="flexColStart contactModes">
                    {/* first rowL */}
                      <div className="flexStart row">
                              <div className="flexColCenter mode">
                                    <div className="flexStart">
                                               <div className="flexCenter icon">
                                                  <MdCall size={25}/>
                                               </div>
                                               <div className="flexColStart detail">
                                                  <span className="primaryText">Call</span>
                                                  <span>021 123 133 15</span>
                                                  </div>
                                                  </div>     
                                                  <div className="flexCenter button">
                                                   call now
                                               </div>
                                                                               
                              </div>

                              {/* secondrow */}
                              <div className="flexColCenter mode">
                                    <div className="flexStart">
                                               <div className="flexCenter icon">
                                                  <BsFillChatDotsFill size={25}/>
                                               </div>
                                               <div className="flexColStart detail">
                                                  <span className="primaryText">Chat</span>
                                                  <span>021 123 133 15</span>
                                                  </div>
                                                  </div>     
                                                  <div className="flexCenter button">
                                                   chat now
                                               </div>
                                                                               
                              </div>
                      </div>
                      {/* second column */}

                      <div className="flexStart row">
                              <div className="flexColCenter mode">
                                    <div className="flexStart">
                                               <div className="flexCenter icon">
                                                  <BsFillChatDotsFill size={25}/>
                                               </div>
                                               <div className="flexColStart detail">
                                                  <span className="primaryText">Video Call</span>
                                                  <span>021 123 133 15</span>
                                                  </div>
                                                  </div>     
                                                  <div className="flexCenter button">
                                                   call now
                                               </div>
                                                                               
                              </div>

                              {/* secondrow */}
                              <div className="flexColCenter mode">
                                    <div className="flexStart">
                                               <div className="flexCenter icon">
                                                  <HiChatBubbleBottomCenter size={25}/>
                                               </div>
                                               <div className="flexColStart detail">
                                                  <span className="primaryText">Message</span>
                                                  <span>021 123 133 15</span>
                                                  </div>
                                                  </div>     
                                                  <div className="flexCenter button">
                                                   Message now
                                               </div>
                                                                               
                              </div>
                      </div>
                </div>
            </div>

            <div className="right">
                <div className="img-container">
                    <img src="./images/contact.jpg" alt=""/>

                </div>
            </div>
        </div>
    </section>
    )
   
};
