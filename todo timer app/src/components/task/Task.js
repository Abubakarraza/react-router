import React from 'react';
import { BsTextarea } from 'react-icons/bs';

export default function Task() {
    return (
        <div style={{
            backgroundColor: "#F4F6F8 ", width: "310px", height: "50px", boxSizing: "border-box", borderRadius: "8px",
            marginLeft: "12px",
        }}>
            <div style={{ marginTop: "30px", fontWeight: "500", padding: "10px" }}>
                <BsTextarea style={{ marginLeft: "15px", marginRight: "12px" }} /> Task


            </div>

        </div>
    )
}
