import React ,{useState,useRef,useEffect}from "react";
import "../App.css";
import headerImg1 from "../assets/header1.svg";
import hamburger from "../assets/hamburger.svg";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import PopUp from "./registerPopUp"
import LoginPopUp from "./loginPopUp";

export const Header = (props) => {
  const Menus = [{signup:"Sign Up",login:"Login"}]
  const [open,setOpen] = useState(false)
  const [popUpSignUp , setPopUpSignUp] = useState(false)
  const [popUpLogin , setPopUpLogin] = useState(false)

  // WINDOWDER DARHAAR ALGA BOLOH
  const menuRef = useRef();
  const butRef = useRef();
  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== butRef.current) {
      setOpen(false);
    }
  });
  return (
    <div>
      <PopUp ok={popUpSignUp} onClick={()=>setPopUpSignUp(false)}/>
      <LoginPopUp hey={popUpLogin} onClose={()=>setPopUpLogin(false)}/>
<div className={props.headerClass || "headerBig"}>
   
   <div className="header">
     <div className="headerContent1">
       <img className="headerLogo" src={logo} />
       <div className={props.Haichu || "headerhaichu"}>Хайчихуу?</div>
     </div>
     <div className="headerContent">
       <Link to={"/hostpage"}>
         <button className="headerHostBtn">Become A Host</button>
       </Link>
       <div >
       <div    className="headerContentRight"  >
         <div className="headerContentRight1">
           <img  ref={menuRef} className="headerHamburger" alt="" onClick={()=>setOpen(!open)} src={hamburger} />
         </div>
         <img className="headerContentRight2" alt="" src={headerImg1} />
       </div>
       {open && (          
       <div  style={{background:"white",width:"160px",height:"100px",display:"flex",justifyContent:"flex-start",alignItems:"center",position:"absolute",borderRadius:"6px",boxShadow:"0px 0px 8px rgba(194, 198, 204, 0.6)"}}>
         <div style={{background:"none",width:"100px",height:"50px",display:"flex",justifyContent:"center",alignItems:"center"}}>
              {
             Menus.map((menu)=>(
               <ul ref={butRef} key={menu}>
                   <li  onClick={()=>setPopUpSignUp(true)} style={{border:"none",width:"100px",height:"40px"}}>{menu.signup}</li>
                   <li onClick={()=>setPopUpLogin(true)} style={{border:"none",width:"100px",height:"40px"}}>{menu.login}</li>
               </ul>
             ))
           }
           
         </div>
       </div>
       )}
       </div>
     </div>
   </div>
 </div>
    </div>
    
  );
};
