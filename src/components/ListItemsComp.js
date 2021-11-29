import React from "react";

function ListItemsComp(props) {
  return (
    <>
      <div className="list-item">
        <div className="list-item-icon">
          <img
            src={props.image}
            alt="icon"
          ></img>
        </div>

        <div className="list-item-details">
          <div className="list-item-details-left-side">
            <p>{props.title}</p>
            <div className="list-item-details-tag">
              {
              props.tags.map((ele, idx) => {
                return <p key={idx}>{ele}</p>;
              })}
            </div>
            <div className="list-item-details-timing">
              <img
                src="https://img.icons8.com/material-outlined/24/000000/clock.png"
                alt="clock"
              />
              <p>{props.time} m</p>
            </div>
          </div>

          <div className="list-item-details-right-side">
            <div className="stars">
              <img
                src="https://img.icons8.com/material-outlined/24/000000/star--v2.png"
                alt="star"
              />
              <p>{props.star}</p>
            </div>
            <div className="white-space"></div>
            <div className="list-item-details-right-side-delivery-charges">
              <div className="list-item-details-right-side-delivery">
                {props.delivery === "0" ? "Free" : `${"$" + props.delivery}`}
              </div>

              <div className="list-item-details-right-side-charges">
                Min. ${props.charges}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListItemsComp;
