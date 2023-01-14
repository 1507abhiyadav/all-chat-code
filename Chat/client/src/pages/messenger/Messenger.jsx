import React from "react";
import "./Messenger.css";
import Topbar from '../../components/topbar/Topbar'
import Icon from "../../components/icons/Icon";


function Messenger (){
    return(
        <>
        <div className="side">
        {/* <Icon/> */}
        <Topbar/>
        </div>
        <div className="messenger">
        <Icon/>
         <div className="chatMenu">
            <div className="chatMenuWrapper">
            <input placeholder="Search" className="chatInput"/>
            <h4>FAVORITES</h4>
            <div className="imgIcon">
                <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" alt=""  />
                    <img src="https://i.pinimg.com/564x/87/82/e1/8782e17db3fdc1d8f84073d841819f12.jpg" alt=""/>
                    <img src="https://i.pinimg.com/564x/87/82/e1/8782e17db3fdc1d8f84073d841819f12.jpg" alt=""/>
                    <img src="https://i.pinimg.com/564x/87/82/e1/8782e17db3fdc1d8f84073d841819f12.jpg" alt=""/>
                    <h3>....</h3>
            </div>
            <div><p>People</p>
            <img src="https://i.pinimg.com/564x/87/82/e1/8782e17db3fdc1d8f84073d841819f12.jpg" alt=""/>
                    <img src="https://i.pinimg.com/564x/87/82/e1/8782e17db3fdc1d8f84073d841819f12.jpg" alt=""/>
                    <img src="https://i.pinimg.com/564x/87/82/e1/8782e17db3fdc1d8f84073d841819f12.jpg" alt=""/></div>

             </div>
             
           </div>
          <div className="chatBox">
            <div className="chatBoxWrapper">
            box
            </div>
          </div>
          <div className="chatAttchaments">
             <div className="chatAttchamnetsWrapper">
               chatAttchaments
             </div>
         </div>
        </div>
    

        </>
    )
};

export default Messenger;
