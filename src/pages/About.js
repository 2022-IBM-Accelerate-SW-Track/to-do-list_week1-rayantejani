import React, { Component } from 'react';
import "./About.css";
import pic from "../assets/profile_pic.jpeg";
  
export default class About extends Component {
  render() {
    return (
      <div>
      <div class="split left">
        <div className="centered">
          <img 
            className="profile_image"
            src={pic}
            alt="Profile Pic"
            ></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Rayan Tejani</div>
          <div className="brief_description">
            Electrical & Computer Engineering Student at The University of Texas at Austin
          </div>
        </div>
      </div>
    </div>
  
    )
  }
}