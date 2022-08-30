import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
//import inquries from "../../../BACKEND/models/Inquiry";
//import Swal from "sweetalert2";
//import { useNavigate } from 'react-router-dom';

export default function StudentUpdateInqury(){
       
  const [inquries, setInquiries] = useState([]); 
  const [grade, setgrade] = useState("");
  const [subjects, setsubjects] = useState("");
  const [email, setemail] = useState("");
  const [inqHeader, setinqHeader] = useState("");
  const [inqBody, setinqBody] = useState("");
  const [currentImage, setCurrentImage] = useState("");
  const {id}=useParams();
    
  let inqimage = "";
 // let objectID = "";
  let image2 = "";
  let image3 = "";

  useEffect(() => {
 
    async function getinquries() {
   
      console.log("hello");
     
     console.log(id); 
     // const objectID = this.props.match.params.id;
     // console.log(objectID);
      await axios
        .get("http://localhost:8070/inquiry/get/" + id)
        .then((res) => {


            setInquiries(res.data);
            setgrade(res.data.grade);
            setsubjects(res.data.subjects);
            setemail(res.data.email);
            setinqHeader(res.data.inqHeader);
            setinqBody(res.date.inqBody);

            setCurrentImage(res.data.inqimage);
            inqimage = res.data.inqimage;

        })
        .catch((err) => {
          alert(err.msg);
        });
        
    }
    getinquries();
  }, []);

  function inquiryI() {
    inqimage = document.getElementById("inqimage").value;
  }

  function Imagecheck() {
    let rimage = document.getElementById("inqimage").value;

    if (rimage === "") {
      image3 = currentImage;
    } else {
      image2 = document.getElementById("inqimage").value;

      image3 = image2.substring(12);
    }
  }
 

  function updateInquiry() {
    inquiryI();
    Imagecheck();
    //console.log('hello world');

    const updateInquiry = {
      inquiry_id: inquries.inquiry_id,
      name: inquries.name,
      grade,
      subjects,
      email,
      inqHeader,
      inqBody,
      inqimage: image3,
    };
         

   console.log(updateInquiry);
   
    axios
      .put("http://localhost:8070/inquiry/update/" + id, updateInquiry)
      .then(() => {
       
        alert("Inquiry Has been updated");
      })
      .catch((err) => {
        alert(err);
      });
  }

    return(
        <div style={{marginLeft:"325px",width:"76%"}}> 
        <h1> Update Inquiry </h1>
          <form>
          
  
          <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputEmail4">Email</label>
        <input type="email" class="form-control" id="inputEmail4" placeholder="Email"  
        Value={inquries.email}
        onChange={(e) => {
          setemail(e.target.value);
        }}/>
      </div>
  
      
      <div class="form-group col-md-4">
        <label for="inputState">Subject</label>
        <select id="inputState" class="form-control"  /*Value={inquries.subjects}*/ onChange={(e)=>{setsubjects(e.target.value)}}>
          <option selected>Choose Subject...</option>
          <option>combined mathematics</option>
          <option>Physics</option>
          <option>Chemistory</option>
          <option>Biology</option>
        </select>
      </div>
      
      <div class="form-group col-md-4">
        <label for="inputState">Grade</label>
        <select id="inputState" class="form-control" /*Value={inquries.grade}*/ onClick={(e)=>{setgrade(e.target.value)}}>
          <option selected>Choose Subject...</option>
          <option> 12 </option>
          <option> 13 </option>
          
        </select>
      </div>
    
      <div className="container">
    <br/>
      <label for="exampleInputPassword1">Header</label>
      <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Header"
      Value={inquries.inqHeader}
      onChange={(e) => {
        setinqHeader(e.target.value);
      }}
      />
    </div>
  <br/>
    <div className="container">
    <br/>
       <div className="mb-3" style={{ width: "1090px" }}>
                 <label for="exampleInputPassword1" class="form-label">
                   Enter Description
                 </label>
                 <textarea
                   rows="5"
                   class="form-control"
                   id="description"
                   placeholder="Description"
                   Value={inquries.inqBody}
                   onChange={(e) => {
                   setinqBody(e.target.value);
                   }}
                  
                 ></textarea>
               </div>
  
               </div>
  
               <div className="container">
              <label htmlFor="exampleFormControlFile1" style={{ color: "black" }}>
                Inquiry Image
              </label>
              <input
                type="file"
                className="form-control-file"
                id="inqimage"
                //onChange={onChangePicture}
                required
              />
            </div>
            <div className = "container">
  
            <div className="ImagePreview">
              <img
               src={"/upload/" + inquries.inqimage}
                id="inqimage"
                style={{
                  position: "relative",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "150px",
                  height: "150px",
                  border: "none",
                  marginTop: "10px",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
             
              />
            </div>
           <br/>
  
           
            </div>
  
  
  
  <div className="container">
      <br/>
    <button type="submit" className="btn btn-primary"  onClick={()=>updateInquiry(inquries._id)}>Submit</button>
    </div>
  </div>
          
   </form>
        </div>
    )
}