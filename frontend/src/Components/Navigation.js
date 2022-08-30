//import React, {Component} from "react";
import React  from "react";


export default function Navigation(){

   
        return(
            <div className="container" style={{padding:'50px',marginLeft:"300px",width:"76%" }}>
                <div className="row">
                    <div className="col-4">
                    <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{marginLeft:'30px', height:'80px', width:'300px'}}>
                 <a href="/teacherAdd" style={{textDecoration:'none', color:'white'}}>CREATE TEACHER</a>
                </button>
                    </div>
                    <div className="col-4">
                    <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{marginLeft:'30px', height:'80px', width:"300px"}}>
                 <a href="/teacherAll" style={{textDecoration:'none', color:'white'}}>ALL TEACHERS</a>
                </button>
                    </div>
                    <div className="col-4">
                    <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{marginLeft:'30px', height:'80px', width:'300px'}}>
                 <a href="/allLeaves" style={{textDecoration:'none', color:'white'}}>ABSENT TEACHERS</a>
                </button>
                    </div>
                </div>
<br></br>

                <div className="row">
                    <div className="col-4">
                    <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{marginLeft:'30px', height:'80px', width:'300px'}}>
                 <a href="/addSalary" style={{textDecoration:'none', color:'white'}}>CREATE SALARIES</a>
                </button>
                    </div>
                    <div className="col-4">
                    <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{marginLeft:'30px', height:'80px', width:"300px"}}>
                 <a href="/AllSalary" style={{textDecoration:'none', color:'white'}}>ALL TEACHER SALARIES</a>
                </button>
                    </div>
                    <div className="col-4">
                    <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{marginLeft:'30px', height:'80px', width:'300px'}}>
                 <a href="/teacherLeave" style={{textDecoration:'none', color:'white'}}>ADD LEAVE</a>
                </button>
                    </div>
                </div>

<br></br>
                <div className="row">
                    <div className="col-4">
                    <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{marginLeft:'30px', height:'80px', width:'300px'}}>
                 <a href="/teacherReportInput" style={{textDecoration:'none', color:'white'}}>REPORT</a>
                </button>
                    </div>
                    <div className="col-4">
                    <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{marginLeft:'30px', height:'80px', width:"300px"}}>
                 <a href="/AllSalary" style={{textDecoration:'none', color:'white'}}>ONLINE</a>
                </button>
                    </div>
                    <div className="col-4">
                    <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{marginLeft:'30px', height:'80px', width:'300px'}}>
                 <a href="/teacherLeave" style={{textDecoration:'none', color:'white'}}>ADD LEAVE</a>
                </button>
                    </div>
                </div>


                          </div>






 
        )
    }
