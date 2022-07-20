import React from 'react';
import { BsReceiptCutoff } from 'react-icons/bs';

export default function PlannedCard() {
  return (
    <div style={{
      backgroundColor: "#F4F6F8 ", width: "310px", height: "50px", boxSizing: "border-box", borderRadius: "8px",
      marginLeft: "12px"
    }}>
      <div style={{ marginTop: "30px", fontWeight: "500" , padding: "10px" }}>
        <BsReceiptCutoff style={{ marginLeft: "15px", marginRight: "12px"}} /> Planned


      </div>
    </div>
  )
}
