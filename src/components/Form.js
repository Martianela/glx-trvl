import React from "react";
import "./FormS.css";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>your name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="text"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Details</label>
        <textarea rows="6" placeholder="type a short message here"></textarea>
        <button className="btn">submit</button>
      </form>
    </div>
  );
};

export default Form;
