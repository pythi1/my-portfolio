import React from "react";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";

function Share() {
  return (
    <div className="flex flex-row xl:flex-col " >
      <div className="share-div">
          <AddHomeWorkIcon className="icon" />
       
        <div>
          <h2>Address</h2>
          <p>Haryana, India</p>
          <p>Pin: 125110</p>
        </div>
      </div>

      <div className="share-div">
        
          <PhoneInTalkIcon className="icon"/>
      

        <div>
          <h2>Phone</h2>
          <a href="tel:+919050358147" >
          <p>+91 90503-58147</p>
          </a>
        </div>
      </div>

      <div className="share-div">
        
          <AttachEmailIcon className="icon " />
        
        <div>
          <h2>email</h2>
          <a href="mailto:pramodjangra144@gmail.com?subject=Hello&body=I wanted to contact you" >
          <p>pramodjangra144@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Share;
