import React from 'react';
import { BsSnow2 } from 'react-icons/bs';

export default function CardDay() {
  return (
    <div style={{
      backgroundColor: "#F4F6F8 ", width: "310px", height: "50px", boxSizing: "border-box", borderRadius: "8px",
      marginLeft: "12px"
    }}>

      <div style={{ marginTop: "30px", fontWeight: "bold", padding: "10px" }}>
        <BsSnow2 style={{ marginLeft: "15px", marginRight: "12px" }} /> My Day


      </div>

    </div>
  )
}
