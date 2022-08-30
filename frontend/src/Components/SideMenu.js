import React from "react"
//import "./css/SideMenu.css";



export default function Sidemenue(){
     
        return(
            <div style={{display:'flex'}}>
<section id="menu">
<div className="logo">
<img src={'/logon.jpeg'} width="60px" height="60px"/>
<h2>Amzo Learning</h2>
</div>
<div className="items">
<li><i className="fa-solid fa-chart-pie"></i><a href="#">Dashboard</a></li>
<li><i className="fa-solid fa-person-chalkboard"></i><a href="#">Teacher Management</a></li>
<li><i className="fa-solid fa-people-group"></i><a href="#">Student Management</a></li>
<li><i className="fa-solid fa-building-columns"></i><a href="#">Class Management</a></li>
<li><i className="fa-solid fa-circle-question"></i><a href="/Inquiry/AllInquiries">Inquire Management</a></li>
<li><i className="fa-solid fa-note-sticky"></i><a href="/Notice/AllNotices">Notice Management</a></li>
</div>

</section>

<section id="interface">
<div className="navigation">
    <div className="n1">
        <div className="search">
        <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search"></input>
        </div>
    </div>
    <div className="profile">
        <i className="far fa-bell"></i>
        <img src={'/ppnn.jpeg'} alt=""></img>
    </div>
</div>
</section>


 



</div>




        )
    }
