import React from 'react';
import { BsStarFill } from 'react-icons/bs';

export default function ImportantCard() {
  return (
    <div style={{
      backgroundColor: "#F4F6F8 ", width: "310px", height: "50px", boxSizing: "border-box", borderRadius: "8px",
      marginLeft: "12px"
    }}>
      <div style={{ marginTop: "30px", fontWeight: "500", marginRight: "12px", padding: "10px" }}>
        <BsStarFill style={{ marginLeft: "15px", marginRight: "12px"  }} /> Important


      </div>
    </div>
  )
}
