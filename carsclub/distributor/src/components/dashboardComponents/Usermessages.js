import React, {useState, useEffect, useContext} from 'react'
import {NavLink} from "react-router-dom";

import { AdminContext } from "../../App"

const Usermessages = () => {

  const {adminState, dispatchadmin} = useContext(AdminContext)

  const [getUsers, setGetUsers] = useState([]);
  let allMessage = [];


  const getallusers = async () =>{
    try {
        const res = await fetch ('/getavailableusers', {
            method: 'GET',
        });

        const data = await res.json();

        setGetUsers(data)      
    }
    catch (error) {
        console.log(error)
    }
}

useEffect(() => {
  getallusers();
}, [])

  getUsers.map(getUsers=>{
    if(getUsers.messages.length > 0){
      allMessage.push(getUsers.messages)
    }   
    
  })


 
  let messageIdFromDashBoard;
  const deleteMessage = (e) =>{
    messageIdFromDashBoard = e.target.id;
    return fetch("/deleteMessagefromdashboard", {
      method: "POST",
      headers:{
          "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        messageIdFromDashBoard
      })
  })
  }


  const Loginbutton= () =>{
        
    if(adminState){
        return <div> 
            <button className="logoutbtnDash"><NavLink className="nav-link" to="/adminsignout">logout</NavLink></button>      
        </div>
    }
    else{
        return <div>  
                <button className="logoutbtnDash"><NavLink className="nav-link" to="/signin">login</NavLink></button>
                
            </div>
    }
  }


    return (
        <>
            
            
  <div className="sidebar">
    <div className="logo-details">
      <i className='bx bxl-c-plus-plus'></i>
      <span className="logo_name">VROOM</span>
    </div>
      <ul className="nav-links">
        {/* <li className="active"> */}
        <li>
            <NavLink className="dashlinks" to="/dashboard">
            <i className='bx bx-grid-alt' ></i>
            <span className="allLinks_name">Dashboard</span>
            </NavLink>
        </li>
        <li>
            <NavLink className="dashlinks" to="/addcars">
            <i className='bx bx-box' ></i>
            <span className="allLinks_name">Add Cars</span>
            </NavLink>
        </li>
        <li>
            <NavLink className="dashlinks" to="/getsalecarsforadmin">
            <i className='bx bx-box' ></i>
            <span className="allLinks_name">Available SaleCars</span>
            </NavLink>
        </li>
        <li>
            <NavLink className="dashlinks" to="/getrentcarsforadmin">
            <i className='bx bx-box' ></i>
            <span className="allLinks_name">Available RentCars</span>
            </NavLink>
        </li>
        <li>
            <NavLink className="dashlinks" to="/salecarsreports">
            <i className='bx bx-box' ></i>
            <span className="allLinks_name">Sale Cars Income</span>
            </NavLink>
        </li>
        <li>
            <NavLink className="dashlinks" to="/rentcarsreports">
            <i className='bx bx-box' ></i>
            <span className="allLinks_name">Rent Cars Income</span>
            </NavLink>
        </li>
        <li>
          <NavLink className="dashlinks" to="/availableusers">
            <i className='bx bx-box' ></i>
            <span className="allLinks_name">Available Users</span>
          </NavLink>
        </li>
        <li>
        <NavLink className="dashlinks" to="/usermessages">
            <i className='bx bx-box' ></i>
            <span className="allLinks_name">User's Messages</span>
          </NavLink>
        </li>
      </ul>

      <div className="logoutbtnDashDiv">
        <Loginbutton/>
      </div>
  </div>



  <section className="home-section">
    <nav>
      <div className="sidebar-button">
        <i className='bx bx-menu sidebarBtn'></i>
        <span className="dashboard">Dashboard</span>
      </div>
      
      <div className="profile-details">
        {/* <img src="/image/profile.jpg" alt=""/> */}
        <span className="admin_name">Team 5</span>
        <i className='bx bx-chevron-down' ></i>
      </div>
    </nav>



        
    <div className = "salecartableDiv">

            <h1 className="heading"><span>Messages From Users</span></h1>
        </div>

        {allMessage.map((allMessages, index) => 
            <div className = "userMessagesli"  key={allMessage._id} >
                  {allMessages.map((displayMessage, index)=>
                  <ul>
                    <li style={{wordSpacing: "10px"}}>
                      {displayMessage.name}:-{displayMessage.message}  <button style={{float:"right", marginTop:"-6px"}} className="btn" id={displayMessage._id} onClick={deleteMessage}><i className="fa fa-trash"></i></button>
                    </li>
                  </ul>
                  )}
                 
            </div>
         
        )}
    </section>
        </>
    )
}

export default Usermessages
