import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import React, { Component }  from 'react';

import './css/SideMenu.css';
import AddNotice from './Components/AddNotice';
import AllNotices from './Components/AllNotices';
import AddInquiry from './Components/AddInquiry';
import AllInquiries from './Components/AllInquiries';
import EditNotices from './Components/EditNotices';
import Navigation from './Components/Navigation';
import SideMenue from './Components/SideMenu';
import AdminLogin from './Components/AdminLogin';
import AdminRegister from './Components/AdminRegister';
import TeacherViewAllNotices from './Components/TeacherViewAllNotices';
import StudentViewAllNotices from './Components/StudentViewAllNotices';
import StudentViewAllInquiries from './Components/StudentViewInquiries';
import StudentUpdateInqury from './Components/StudentUpdateInqiury';
function App() {
  return (
   
    <Router>
<SideMenue/>
    <Routes>
   
     <Route exact path="/Notice/AddNotice" element={<AddNotice/>} />
     <Route exact path="/Notice/AllNotices" element={<AllNotices/>} />
     <Route exact path="/Student/AddInquiry" element={<AddInquiry/>}/>
     <Route exact path="/Inquiry/AllInquiries" element={<AllInquiries/>}/>
     <Route exact path="/Notice/EditNotices/:id" element={<EditNotices/>}/>
     <Route exact path="/" element={<AdminLogin/>}/>
     <Route exact path="/Admin/AddAdmin" element={<AdminRegister/>}/>
     <Route exact path="/Teacher/AllNotices" element={<TeacherViewAllNotices/>}/>
     <Route exact path="/Student/AllNotices" element={<StudentViewAllNotices/>}/>
     <Route exact path="/Student/AllInquiries" element={<StudentViewAllInquiries/>}/>
     <Route exact path="/Student/EditInquiries/:id" element={<StudentUpdateInqury/>}/>
     <Route exact path="/" element={<Navigation/>}/>
     


     </Routes> 
   </Router>
   
   
  );
}

export default App;
