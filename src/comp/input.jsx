import React, { useState } from "react";
import "./display.css";
import Display from "./display";

function Input(props) {
  const { arr } = props;
  const [text, settext] = useState("");

  function enter_txt(e) {
    console.log(e.target.value);

    return settext(e.target.value);
  }

  let op = document.getElementsByClassName("op");
  function addin(e) {
    if (text.trim() == "") {
      console.log("empty");

      return;
    }

    let pi = {
      id: arr.length + 1,
      val: text
    };
    arr.push(pi);

    settext("");
  }
  function fxn() {
    <Display arr={arr} />;
  }
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <input
          onChange={enter_txt}
          type="text"
          placeholder="Enter "
          value={text}
          style={{
            width: "40%",
            height: "30px",
            fontSize: "30px",
            padding: "10px"
          }}
        ></input>
        <button
          className="aa1"
          onClick={addin}
          style={{
            padding: "0px",
            height: "30px",
            fontSize: "30px",
            cursor: "pointer",
            textAlign: "center",
            margin: "10px"
          }}
        >
          ADD
        </button>
      </div>
      <div className="main">
        <div>
          <div style={{fontSize:"40px",fontWeight:"900px"}}>Task</div>
          <div className="op">
            {arr.map((e, i) => {
              return (
                <div key={i} className="bo">
                  Topic: {e.val} <button >Edit</button>
                  <button onClick={()=>{
                    arr.forEach((el,il) => {
                      if(il==i){
                        arr.splice(i,i+1);
                        console.log(arr);
                      }
                      
                    });
                  }}>remove</button>
                </div>
              );
            })}
          </div>
        </div>
    
      </div>
    </>
  );
}

export default Input;
