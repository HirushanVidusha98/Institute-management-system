import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
//import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

export default function EditNotices(props) {
  
  let navigate = useNavigate();
    const [notices, setNotices] = useState([]);
    const [header, setheader] = useState("");
    const [description, setDescription] = useState("");
    const [currentImage, setCurrentImage] = useState("");
    const {id}=useParams();
    
  let noticeImage = "";
 // let objectID = "";
  let image2 = "";
  let image3 = "";

  useEffect(() => {
 
    function getNotices() {
   
      console.log("hello");
     
     console.log(id); 
     // const objectID = this.props.match.params.id;
     // console.log(objectID);
      axios
        .get("http://localhost:8070/notice/get/" + id)
        .then((res) => {
            setNotices(res.data);
            setheader(res.data.header);
            setDescription(res.data.description);
          setCurrentImage(res.data.noticeImage);
         noticeImage = res.data.noticeImage;
        })
        .catch((err) => {
          alert(err.msg);
        });
        
    }
    getNotices();
  }, []);

  function noticeI() {
    noticeImage = document.getElementById("noticeImage").value;
  }

  function Imagecheck() {
    let rimage = document.getElementById("noticeImage").value;

    if (rimage === "") {
      image3 = currentImage;
    } else {
      image2 = document.getElementById("noticeImage").value;

      image3 = image2.substring(12);
    }
  }
 

  function updateNotice() {
    noticeI();
    Imagecheck();

    const updatenotice = {
      notice_id: notices.notice_id,
      header,
     description,
     noticeImage: image3,
    };
         

    console.log(updatenotice);
   // let objectID = props.match.params.id;
    axios
      .put("http://localhost:8070/notice/update/" + id, updatenotice)
      .then(() => {
        // Swal.fire(
        //   "Success",
        //   "Your Refund has been successfully updated",
        //   "success"
        // );
       
        //this.props.history.push("/Notice/AllNotices");
        alert("Notice Has been updated");
        navigate("/Notice/AllNotices");
      })
      .catch((err) => {
        alert(err);
      });
    
  }
return(
  <div style={{marginLeft:"325px",width:"76%"}}>
    <div className="container">
      <h1>Edit Notice</h1>
    <form>
      <div class="mb-3" style={{ width: "800px" }}>
        <label for="exampleInputEmail1" class="form-label">
          Enter Header
        </label>
        <input
          type="text"
          class="form-control"
          id="email"
          placeholder="Email"
          Value={notices.header}
          onChange={(e) => {
            setheader(e.target.value);
          }}
        />
        
      </div>
      <div class="mb-3" style={{ width: "500px" }}>
          <label for="exampleInputPassword1" class="form-label">
            Enter Description
          </label>
          <textarea
            rows="5"
            class="form-control"
            id="description"
            placeholder="Description"
            required
            Value={notices.description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
</div>
      <div className="form-group">
        <label htmlFor="exampleFormControlFile1" style={{ color: "black" }}>
          Notice Image
        </label>
        <input type="file" className="form-control-file" id="noticeImage" />
      </div>
      <div className="Image">
        <img
          src={"/upload/" + notices.noticeImage}
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
      <br />
      <button
        type="submit"
        class="btn btn-primary"
        onClick={() => updateNotice(notices._id)}
      >
        Update
      </button>
    </form>
  </div>
  </div>
);


}


