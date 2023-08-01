import React from "react";
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import { slider } from "../../utils/Slider";
import 'swiper/css';
import './Residencies.css'
import data from "../../utils/slider.json"

export default function Residencies(params) {
    return(
        <sections className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                   <span className="orangeText">Best Choices</span>
                   <span className="primaryText">Popular Residencies</span>  
                </div>
                    {/* swiper function defined as 3params 1st intial no of slide
                    2nd spac bw them ,3rd condition */}
                <Swiper {...slider}>
                    
                <SliderButton/>
                    {
                        
                        data.map((card,i)=>(
                               <SwiperSlide key={i}>
                                   <div className="flexColCenter r-card">
                                        <img src={card.image} alt="home"/>
                                         <span className="secondaryText r-price">
                                            <span style={{color: "orange"}}>$</span><span>{card.price}</span>
                                         </span>

                                         <span className="primaryText">{card.name}</span>
                                         <span className="secondaryText">{card.detail}</span>
                                   </div>
                               </SwiperSlide>
                        ))
                    }
                    
                </Swiper>
            </div>
        </sections>
    );
};
const SliderButton=()=>{
    const swiper=useSwiper();
    return(
        <div className="flexCenter r-buttons">
           <button onClick={()=>swiper.slidePrev()}>&lt;</button>
           <button  onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    )
}
