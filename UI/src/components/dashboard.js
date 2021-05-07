import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../css/dashboard.css";

function Dashboard() {
  const [data, setAllData] = useState({firstname:"", middlename:""});
  const [img, setImage] = useState()

  let history = useHistory()
  const onLogout =()=>{
    history.push('/')
  }

  const onChangeFirstName=(e)=>{
      setAllData({...data,firstname:e.target.value})
  }

  const onChangeMiddleName=(e)=>{
        setAllData({...data,middlename:e.target.value})
  }

  const onChangeLastName=(e)=>{
        setAllData({...data,lastname:e.target.value})
  }

const uploadImage=(e)=>{
  setImage({img: URL.createObjectURL(e.target.files[0])})
}
  return (
    <>
      <div className="top_Nav">
        <div className="avthar_img">
          <img
            src="../../images/avatarimg.png"
            alt="donn-gabriel-baleva-U-Z4-P2-H3-KFE-unsplash"
            border="0"
          />
        </div>

        <div className="nav_text">
          <p className="name">Name</p>
          <button className="logout" onClick={onLogout}>Logout</button>
        </div>
      </div>

      <div className="row">
          <div className="col-6">
          <div className="dashboard_fileds">
              <p>First Name:</p>
              <input className="email_value1"
                     type="text"
                     name="firstname"
                     placeholder="First Name"
                     onChange={onChangeFirstName}
               />
               <p>Middle Name:</p>
               <input className="email_value1"
                      type="text"
                      name="middlename"
                      placeholder="Middle Name"
                      onChange={onChangeMiddleName}
                />
                <p>Last Name:</p>
                <input className="email_value1"
                       type="text"
                       name="lastname"
                       placeholder="Last Name"
                       onChange={onChangeLastName}
                 />
                 <p>Address:</p>
                 <input className="email_value1"
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={onChangeLastName}
                  /><br/>
                  <input className="email_value1"
                         type="text"
                         name="villagename"
                         placeholder="Village Name"
                         onChange={onChangeLastName}
                   /><br/>
                   <input className="email_value1"
                          type="text"
                          name="cityname"
                          placeholder="City Name"
                          onChange={onChangeLastName}
                    /><br/>
                    <input className="email_value1"
                           type="text"
                           name="statename"
                           placeholder="State Name"
                           onChange={onChangeLastName}
                     /><br/>
                     <input className="email_value1"
                            type="text"
                            name="pin"
                            placeholder="PIN Code"
                            onChange={onChangeLastName}
                      />

          </div>
          </div>
          <div className="col-6">
              <label for="status">Marital Status:</label><br/>
              <select id="status" name="status">
              <option value="Single">Single</option>
              <option value="married">Married</option>
              </select>
              <br/>
              <p>Upload Resume : </p>
              <input className="email_value1"
                    type="file" id="myFile" name="filename" />
              <p>Upoad Photo : </p>
              <input type="file" name='img' onChange={uploadImage}/>
              <img src={img}/><br/>
              <p>Upload Signature : </p>
              <input className="email_value1"
                    type="file" id="myFile" name="filename" />
              <br/>
              <button className="btn btn-primary login_btn"
                      type="submit"
              >Submit</button>
          </div>
      </div>




    </>
  );
}

export default Dashboard;
