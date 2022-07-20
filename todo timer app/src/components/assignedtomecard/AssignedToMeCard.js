import React from 'react';
import { BsPerson } from 'react-icons/bs';

export default function AssignedToMeCard() {
  return (
    <div style={{
      backgroundColor: "#F4F6F8 ", width: "310px", height: "50px", boxSizing: "border-box", borderRadius: "8px",
      marginLeft: "12px"
    }}>
      <div style={{ marginTop: "30px", fontWeight: "500", padding: "10px" }}>
        <BsPerson style={{ marginLeft: "15px", marginRight: "12px" }} /> Assigned to me


      </div>
    </div>
  )
}
