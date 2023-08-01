import { faBed, faCalendarDays,faCar,
    faPerson,faPlane,faTaxi,
  } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext} from "../../context/SearchContext";
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from "react-countup";
import {motion} from 'framer-motion'
// import {Link} from "react-router-dom"
// import { AuthContext } from "../../context/AuthContext";

export default function Header({type}) {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);

  const [dates, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
 

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

   function room(){
    setOpenDate(false);
    if(openOptions) setOpenOptions(false);
    else setOpenOptions(true);
    //setOpenOptions(true);
   }
   function calender(){
    setOpenOptions(false);
    if(openDate===true) setOpenDate(false);
    else setOpenDate(true)
   }
   const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
 // const {user}=useContext(AuthContext);
  const navigate = useNavigate();
  // const loginClick = () => {

  //       navigate("/login");

  //   };
  //   const regClick=()=>{
  //     navigate("/signin");
  //   }
  const {dispatch}=useContext(SearchContext);

  const handleSearch=()=>{
    dispatch({type:"NEW_SEARCH",payload :{destination,dates,options}})
    navigate("/hotels", { state: { destination, dates, options } });       
  }
  
    return(
    <div className="header">
       
        <div className={ type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="white-gradient"></div>
        {/* <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
                <span className="logo">Axiobooking</span>
                </Link>
                

              {user? user.username: (  <div className="navItems">
                    <button className="navButton" onClick={regClick}>Register</button>
                    <button className="navButton" onClick={loginClick}>Login</button>
                </div>)}
               
            </div>
        </div> */}
       
           {type==="list" && <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>
           <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
            </div>
           <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
           </div>
           <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
           </div>
           <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
            </div>
           </div>}
           {type!=="list" &&
            <div>

<div className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
              <div className="hero-left">
                 <div className="hero-title">
                        <div className="orange-circle"/>
                        <motion.h1
                        initial={{y: "2rem",opacity:0}}
                        animate={{y:0,opacity:1}}
                        transition={{
                            duration: 2,
                            type: "spring"
                        }}
                        >Discover <br/>
                            Most Suitable<br/>
                             Hotel</motion.h1>
                     </div>
                     <div className="flexColStart hero-des">
                        <span>Find a variety of hotels that suit u very easily</span>
                        <span>forget all difficulties in finding a residence for you</span>
                     </div>
                     <br></br>
                     {/* searchbar */}
                     <div className="secons">
                     <div className="flexCenter search-bar seconst">
                        <HiLocationMarker color="var(--blue)" size={25}/>
                        <button className="button">Search below</button>
                        </div>
                     </div>
          

                     <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                               <span>
                                 <CountUp start={8000} end={9000} duration={3}/>
                                 <span>+</span>
                                </span>

                                <span>
                                    Premium Products
                                </span>
                           
                        </div>
                        <div className="flexColCenter stat">
                             <span>
                                 <CountUp start={1900} end={2000} duration={3}/>
                                 <span>+</span>
                             </span>

                                <span>
                                    Happy Customers
                                </span>
                        </div>
                        <div className="flexColCenter stat">
                              <span>
                                 <CountUp  end={28} />
                                 <span>+</span>
                             </span>

                                <span>
                                    Award winning
                                </span>
                        </div>


                     </div>
                    
              </div>

              
              <div className="flexCenter hero-right">
                 <motion.div className="timg-container"
                 initial={{x:"3rem",opacity:10}}
                 animate={{x:0,opacity:1}}
                 transition={{
                    duration: 4,
                    type: "spring"
                }}
                 >
                    <img src="./images/hero-image.png" alt=""></img>
                 </motion.div>
              </div>
            </div>
        </div>
  



               {/* <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Axiobooking account
            </p>
            <button className="headerBtn">search below</button> */}

{/* <div className="flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)" size={25}/>
                        <input type="text"/>
                        <button className="button">Search</button>
                        </div> */}

            <div className="headerSearch flexCenter search-bar">
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Destination?(mumbai,banglore,etc...)"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
                </div>
                <div className="headerSearchItem" >
                   <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                   <span className="headerSearchText" onClick={calender}>{`${format(dates[0].startDate,"MM/dd/yyyy")} to ${format(dates[0].endDate,"MM/dd/yyyy")} `}</span>
                   {openDate && <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />}
                </div>
                <div className="headerSearchItem" >
                   <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                   <span className="headerSearchText" onClick={room}>{`${options.adult} adult . ${options.children} children ${options.room} room `}</span>
                   {openOptions && <div className="options">
                    <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <button disabled={options.adult<2}
                         className="optionCounterButton"  onClick={() => handleOption("adult", "d")}>-</button>
                          <span className="optionCounterNumber">{`${options.adult} `}</span>
                        <button className="optionCounterButton"  onClick={() => handleOption("adult", "i")}>+</button>
                    </div>

                    <div className="optionItem">
                        <span className="optionText">Child</span>
                        <button disabled={options.children<1}
                         className="optionCounterButton"  onClick={() => handleOption("children", "d")}>-</button>
                          <span className="optionCounterNumber">{`${options.children} `}</span>
                        <button className="optionCounterButton"  onClick={() => handleOption("children", "i")}>+</button>

                    </div>

                    <div className="optionItem">
                        <span className="optionText">Room</span>
                        <button disabled={options.room<2}
                         className="optionCounterButton"  onClick={() => handleOption("room", "d")}>-</button>
                          <span className="optionCounterNumber">{`${options.room} `}</span>
                        <button className="optionCounterButton"  onClick={() => handleOption("room", "i")}>+</button>

                    </div>
                   </div>}
                </div>
                <div className="headerSearchItem">
                <button className="button" onClick={handleSearch}>
                  Search
                </button>
                </div>
            </div></div> }
        </div>
     </div>
    )
};
