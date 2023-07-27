import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css"

export default function Signin(params) {
    const [credentials, setCredentials] = useState({
        username: undefined,
        email: undefined,
        password:undefined,
    })
    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate()
    
    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      };

      const loginClick = () => {
        navigate("/login");
    };
    
      const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
          const res = await axios.post("/api/auth/register", credentials);
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
          navigate("/")
        } catch (err) {
          dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
      };

    return(
        <div className="login">
        <div className="lContainer">
          <input
            type="text"
            placeholder="username"
            id="username"
            onChange={handleChange}
            className="lInput"
          />
           <input
            type="email"
            placeholder="Email"
            id="email"
            onChange={handleChange}
            className="lInput"
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
            className="lInput"
          />
          <button disabled={loading} onClick={handleClick} className="lButton">
            Register
          </button>
          <button disabled={loading} onClick={loginClick} className="rl">/Login</button>
          {error && <span>{error.message}</span>}
        </div>
      </div>
    )
};
