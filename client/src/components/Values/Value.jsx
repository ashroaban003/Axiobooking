import React, { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import './Value.css'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import data from '../../utils/accordion'


export default function Value(params) {
    const [className,setClassName] = useState(null)
    return(
        <section className="v-wrapper">
        <div className="paddings innerwidth flexCenter v-container">

             <div className="v-left">
                <div className="img-container">
                <img  src="./images/value.png" alt=""/>
                </div> 
             </div>

             <div className="flexColStart v-right">
                <span  className="orangeText">Our Value</span> 
                <span className="primaryText">value we give to you</span>
                 <span className="secondaryText">
                    we always ready to help
                    <br/>
                    we provide  good places
                 </span>

                 <Accordion 
                 className="accordion"
                 allowMultipleExpanded={false}
                 preExpanded={[0]}>
                    {
                        data.map((items,i)=>{
                            
                            return(
                               <AccordionItem className="accordionItem" key={i} uuid={i}>
                                  <AccordionItemHeading>
                                       <AccordionItemButton className="flexCenter accordionButton">

                                        {/* below not used since there was an error */}
                                           <AccordionItemState>
                                               {({expanded})=>
                                                 expanded
                                                 ?setClassName("expanded")
                                                 :setClassName("collapsed")
                                               }
                                           </AccordionItemState>
                                           
                                           <div className="flexCenter icon">{items.icon}</div>
                                           <span className="primaryText">
                                            {items.heading}
                                           </span>
                                           <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20}/>
                                           </div>
                                       </AccordionItemButton>
                                  </AccordionItemHeading>
                                   <AccordionItemPanel>
                                     <p className="secondaryText">{items.detail}</p>
                                   </AccordionItemPanel>

                               </AccordionItem>
                            )
                        })
                    }
                 </Accordion>
 

             </div>
        </div>
    </section>
    )
};
