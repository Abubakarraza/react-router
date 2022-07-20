import React from 'react'
import {BsFillGrid3X3GapFill,BsFillQuestionCircleFill  } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
export default function Header() {
  return (
    <div>
         <div style={{ backgroundColor: "#14C8F8 ",height:"50px", padding:"6px"}} className="container-fluid">
        <div className="row">
          <div className="col-lg-1 col-md-1 col-s-1 col-xs-1">
            <BsFillGrid3X3GapFill style={{ marginTop: "8px", justifyContent: "center" }} />

          </div>
          <div className="col-lg-1  "><div style={{ Color: "black", fontSize: "20px", textAlign: "left", marginTop: "2px" }}>To Do</div>
          </div>
          <div className='col-lg-2'></div>
          <div className='col-lg-2' >
            <input type="search" className='form-control'  placeholder="Search"  />

          </div>
          <div className="col-lg-3"></div>
          <div className="col-lg-1">
            < AiOutlineSetting style={{ marginTop: "8px", justifyContent: "center" }} />

          </div>
          <div className="col-lg-1">
            < BsFillQuestionCircleFill style={{ marginTop: "8px", justifyContent: "center" }} />
          </div>
        </div>
      </div>
      
    </div>
  )
}
