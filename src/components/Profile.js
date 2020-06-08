import React from 'react';
import './Profile.css';

function Profile(props)
{
  return (
    <div  className="profDiv">
      <h3 className="profLabel">Profile</h3>
      <img className="profImg" src={props.image}/>
      <br />
      <span className="basicInfo">Name: {props.name}</span>
      <br />
      <span className="basicInfo">Age: {props.age-10}</span>
      <br />
      <span className="basicInfo">Address: {props.address}</span>
    </div>
  );
}

export default Profile;
