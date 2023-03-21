import React, {useState}from "react";
import "./Card.css";
import reactim from "../img/reacti.png";
import google from '../img/google.png'
import fb from '../img/fb.png'
import twitter from '../img/twitteri.png'

const Card = () => {
 
   const [Login, setlogin] = useState(1);
   const [singn, setSingn] = useState(0);

  return (
    <div className="card">
      <div className="card-box">
        <div className="c-upper">
          <img src= {reactim} alt="" />
        </div>
        <div className="text">
          <div>
            hello react.
          </div>
          <div>
            text Some random text
          </div>
        </div>
        <div className="btn-log">
          <div className="longin"
            onClick={()=>{
              setlogin(1);
              setSingn(0);
            }}
            
           style = {{ borderBottom: Login? "2px solid hsl(326, 91%, 47%)" : ''}}
          >Login</div>
          
          <div className="signin"
          onClick={()=>{
            setSingn(1);
            setlogin(0);
          }}
          style = {{ borderBottom: singn? "2px solid hsl(326, 91%, 47%)" : ''}}
          >signup</div>
        </div>
   
        <div className="input">
          {!Login && <input type="text" className="field"  placeholder="Enter your name"/>}
          {!Login && <input type="number" className="field"  placeholder="Phone number"/>}
        <input
          type="email"
          name="email"
          className="field"
          placeholder="Email address"
        />
        <input
          type="password"
          name="password"
          className="field"
          placeholder="Password"
        />
      </div>
      
       

        <div className="btn">
          <button>{Login? 'Login' : 'SignUp'}</button>
        </div>
        <div className="forgot">{Login? 'Forgot Password ?': ''}</div>
        <div className="other-option">or login with</div>
        <div className="avatar">
          <img src={google} alt="" />
          <img src= {fb} alt="" />
          <img src={twitter} alt="" />
        </div>

        <div className="bottom">
          <div>
            Don't have an account?{" "}
            <span style={{ color: " #e70b89" ,
             cursor: 'pointer'
        }}>Create new now!</span>
          </div>
          <div>
            By singing up, you are agree with our{" "}
            <span style={{ color: " #e70b89", textDecoration: "underline" ,
             cursor: 'pointer'
        }}>
              Terms & condition
            </span>
          </div>
        </div>
      </div>
    </div>
  );
      
};

export default Card;
