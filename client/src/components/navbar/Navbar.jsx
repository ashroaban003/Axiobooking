import { useContext } from "react"
import "./navbar.css"
import {Link} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import {  useNavigate } from "react-router-dom";
export default function Navbar(params) {
    const {user}=useContext(AuthContext);
    const navigate = useNavigate();
    const loginClick = () => {

          navigate("/login");

      };
      const regClick=()=>{
        navigate("/signin");
      }
    return(
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
                <span className=" logo">Axiobooking</span>
                </Link>
                

              {user?
              <div>
                 {user.username}
                 <button className="navButton button" onClick={loginClick}>Logout</button>
             </div>               
              : (  <div className="navItems">
                    <button className="navButton button" onClick={regClick}>Register</button>
                    <button className="navButton button" onClick={loginClick}>Login</button>
                </div>)}
               
            </div>
        </div>
    )
};
