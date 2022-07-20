import React,{useState} from 'react';
import {BsPlusLg } from "react-icons/bs";
import { v4 as uuidv4 } from 'uuid';

export default function Planned() {
    const [isupdate, setIsUpdate] = useState(false);
    const [text1, setText1] = useState('');
    const [allEntry, setAllEntry] = useState([]);
    const onClickAddTaskHandler = () => {
  
      setIsUpdate(true);
  
  
  
    };
    const onClickBackHandler = () => {
      setIsUpdate(false);
    };
    const onClickAddHandler = () => {
      if (!text1) {
        alert('Please Add Some Planned')
        return
      }
      let text = {
        etext:text1,
        uid:uuidv4()
      }
      setAllEntry([...allEntry, text]);
      setIsUpdate(false);
      setText1('');
    };
    const onDeleteHandler = (uid) => {
      console.log(uid);
      // setIndex(index);
      let deleteTask = allEntry.filter((text) => text.uid !== uid);
      setAllEntry(deleteTask);
  
    }
  return (
    <div>
          <h2>My Planned</h2>

<h5>{new Date().toLocaleString()}</h5>
{isupdate ?
  <div>
    <h5 style={{ marginTop: "20px" }}>Add your Today Planned</h5>
    <input type="text" value={text1} onChange={(e) => { setText1(e.target.value) }} style={{ width: "300px", marginTop: "10px" }} placeholder="Enter your Plans Here" />


    <button type="button" style={{ marginLeft: "20px" }} className="btn btn-primary " onClick={onClickAddHandler}>Add</button>
    <button type="button" style={{ marginLeft: "20px" }} onClick={onClickBackHandler} className="btn btn-secondary">Back</button>

  </div>
  :
  <div>
    <button style={{ border: "0px", borderRadius: "4px", padding: "-30px", background: "none" }} onClick={onClickAddTaskHandler}>
      <div style={{ width: "650px", height: "50px", background: "#D0D3D4 ", borderRadius: "4px", padding: "10px" }}>


        <h5 style={{ textAlign: "left" }}><BsPlusLg style={{ marginRight: "20px" }} />Add to Your Today Planned</h5>


      </div>

    </button>

  </div>
}
{
  allEntry.map((item, index) => {
    return (
      <div key={index} style={{ width: "650px", height: "100px", background: "#ECF0F1", borderRadius: "4px", padding: "10px", marginLeft: "5px", marginTop: "20px" }}>
      <h4 style={{ color: "#566573" }}>plan {index + 1}</h4>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-lg-10">
            <h5 style={{ color: "#566573" }}>Detail:{item.etext}</h5>

          </div>
          <div className="col-lg-2">

            <button type="button" className="btn btn-danger" onClick={() => onDeleteHandler(item.uid)}>Delete</button>
          </div>
        </div>



      </div>
    </div>
    )
  })
}




      
    </div>
  )
}
