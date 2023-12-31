import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "./list.css";
import Searchitem from "../../components/searchitem/Searchitem";
import useFetch from "../../hooks/useFetch";
export default function List(params) {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.dates);
    const [openDate, setOpenDate] = useState(false);
    const [options] = useState(location.state.options);
    const [min, setMin] = useState("0");
    const [max, setMax] = useState("999");

    const { data, loading,reFetch } = useFetch(`https://bookserver-o7gv.onrender.com/api/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`);
    const handleClick = () => {
      reFetch();
    };
    return (
        <div>
          <Navbar/>
          <Header type="list"/>

          <div className="listContainer">
            <div className="listWrapper">

            <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination}
                onChange={(e) => setDestination(e.target.value)}
               type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" 
                  onChange={(e) => setMin(e.target.value)}
                  className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number"
                   onChange={(e) => setMax(e.target.value)}
                  className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <Searchitem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
            </div>
          </div>
       </div>
    )
};
