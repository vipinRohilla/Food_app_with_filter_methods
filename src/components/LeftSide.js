import React, { useState } from "react";
import "./CSS/LeftSide.css";
import { Cuisine, Dietary, Filters } from "./data/Filters";

function LeftSide({setnewChecked}) {
  const [Checked, setChecked] = useState([]);

  const handleToggle = (value) => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    setnewChecked(newChecked);
  };
  return (
    <>
      <div className="left-box">
        <div className="first-div">
          <div className="first-div-left">
            <img
              src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"
              alt="menu"
            />
          </div>
          <div className="first-div-right">
            <button>Brooklyn, NY</button>
          </div>
        </div>

        <div className="second-div">
          <div className="second-div-top">
            <p>Filters</p>
          </div>

          <div className="second-div-middle">
            {
            Filters.map((value, index) => {
              return (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={value._id}
                    name={value._id}
                    value={value.name}
                    onChange={() => handleToggle(value.name)}
                    checked={Checked.indexOf(value.name) === -1 ? false : true}
                  />
                  <label htmlFor={value._id}> {value.title}</label>
                  <br />
                </div>
              );
            })}
          </div>
          <div className="second-div-bottom">
            <p>More(12)</p>
          </div>
        </div>

        <div className="third-div">
          <div className="third-div-top">
            <p>Cuisine</p>
          </div>

          <div className="third-div-middle">
            {Cuisine.map((value, index) => {
              return (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={value._id}
                    name={value._id}
                    value={value._id}
                  />
                  <label htmlFor={value._id}> {value.title}</label>
                  <br />
                </div>
              );
            })}
          </div>

          <div className="third-div-bottom">
            <p>More(24)</p>
          </div>
        </div>

        <div className="fourth-div">
          <div className="fourth-div-top">
            <p>Dietary</p>
          </div>

          <div className="fourth-div-middle">
            {
            Dietary.map((value, index) => {
              return (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={value._id}
                    name={value._id}
                    value={value._id}
                  />
                  <label htmlFor={value._id}> {value.title}</label>
                  <br />
                </div>
              );
            })}
          </div>
          <div className="fourth-div-bottom">
            <p>More(4)</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSide;
