import React from "react";
import "./CSS/RightSide.css";
import { ImageData } from "./data/ImageData";
import { ListItems } from "./data/ListItems";
import ImageBox from "./ImageBox";
import ListItemsComp from "./ListItemsComp";

function RightSide({ newChecked }) {
  const filterArray = ["fastdelivery", "bestrated", "opennow"];
  return (
    <>
      <div className="right-box">
        <div className="navbar">
          <div className="navbar-left-div">
            <div className="navbar-left-left-text">
              <input type="text" placeholder="What do you want to eat?"></input>
              <button>Search</button>
            </div>
          </div>

          <div className="navbar-right-div">
            <button>
              <img
                src="https://img.icons8.com/material-outlined/24/000000/shopping-cart--v1.png"
                alt="cart"
              />
            </button>
            <a href="_">Create account</a>
          </div>
        </div>

        <div className="right-box-second-div">
          <div className="right-box-second-div-items">
            <ul>
              <li className="selected unselected">All opportunities</li>
              <li>Free delivery</li>
              <li>
                <span>Special offers </span>
                <span className="red-box">-15%</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="right-box-third-div-image-box">
          <div className="right-box-third-div-image-roller">
            {
            ImageData.map((value, index) => {
              return <ImageBox src={value.src} alt={value.alt} key={index} />;
            })
            }
          </div>
        </div>

        <div className="right-box-fourth-div">
          <div className="right-box-fourth-div-top">
            <div className="right-box-fourth-div-title">
              <p>Other restaurants(849)</p>
            </div>
            <div className="right-box-fourth-div-search-box">
              <button>
                <img
                  src="https://img.icons8.com/material-outlined/24/000000/search.png"
                  alt="search"
                />
              </button>
            </div>
          </div>

          <div className="right-box-fourth-div-item-list">
            {
            newChecked.length === 0
              ? ListItems.map((value, index) => {
                  return (
                    <ListItemsComp
                      title={value.title}
                      time={value.time}
                      star={value.star}
                      charges={value.charges}
                      delivery={value.delivery}
                      tags={value.tags}
                      key={index}
                      image={value.image}
                    />
                  );
                })
              : newChecked.every((val) => filterArray.includes(val))
              ? ListItems.map((value, index) => {
                 if (newChecked.includes("opennow") || newChecked.includes("bestrated") || newChecked.includes("fastdelivery")) {

                    //for opennow only
                    if (value.open === "true" && newChecked.includes("opennow") && newChecked.includes("bestrated") === false && newChecked.includes("fastdelivery") === false) {
                        // console.log("1")
                      return (
                        <ListItemsComp
                          title={value.title}
                          time={value.time}
                          star={value.star}
                          charges={value.charges}
                          delivery={value.delivery}
                          tags={value.tags}
                          key={index}
                          image={value.image}
                        />
                      );
                    }

                    //for bestrated only
                    else if (parseInt(value.star) > 4.5 && newChecked.includes("bestrated") && newChecked.includes("opennow") === false && newChecked.includes("fastdelivery") === false) {
                        // console.log("2")
                        return (
                          <ListItemsComp
                            title={value.title}
                            time={value.time}
                            star={value.star}
                            charges={value.charges}
                            delivery={value.delivery}
                            tags={value.tags}
                            key={index}
                            image={value.image}
                          />
                        );
                      }

                      //for fast delivery only
                      else if (parseInt(value.time) < 13 && newChecked.includes("fastdelivery") && newChecked.includes("bestrated") === false && newChecked.includes("opennow") === false) {
                        // console.log("3")
                        return (
                          <ListItemsComp
                            title={value.title}
                            time={value.time}
                            star={value.star}
                            charges={value.charges}
                            delivery={value.delivery}
                            tags={value.tags}
                            key={index}
                            image={value.image}
                          />
                        );
                      }

                      //for opennow and bestrated
                      else if (value.open === "true" && ((parseInt(value.star) > 4.5) === true) && newChecked.includes("opennow") && newChecked.includes("bestrated") && newChecked.includes("fastdelivery")===false) {
                        // console.log("4")
                        return (
                          <ListItemsComp
                            title={value.title}
                            time={value.time}
                            star={value.star}
                            charges={value.charges}
                            delivery={value.delivery}
                            tags={value.tags}
                            key={index}
                            image={value.image}
                          />
                        );
                      }
                      //for bestrated and fastdelivery
                      else if ((parseInt(value.star) > 4.5) && ((parseInt(value.time) < 13) === true) && newChecked.includes("fastdelivery") && newChecked.includes("bestrated") && newChecked.includes("opennow") ===false) {
                        // console.log("5")
                        return (
                          <ListItemsComp
                            title={value.title}
                            time={value.time}
                            star={value.star}
                            charges={value.charges}
                            delivery={value.delivery}
                            tags={value.tags}
                            key={index}
                            image={value.image}
                          />
                        );
                      }

                      //for open now and fastdelivery
                      else if ((value.open === "true") && (parseInt(value.time) < 13) === true && newChecked.includes("opennow") && newChecked.includes("fastdelivery") && newChecked.includes("bestrated")===false) {
                        // console.log("6")
                        return (
                          <ListItemsComp
                            title={value.title}
                            time={value.time}
                            star={value.star}
                            charges={value.charges}
                            delivery={value.delivery}
                            tags={value.tags}
                            key={index}
                            image={value.image}
                          />
                        );
                      }
                     // for opennow and bestrate and fastdelivery
                     else if ((value.open === "true") && ((parseInt(value.time) < 13) === true) && ((parseInt(value.star) > 4.5)===true) && newChecked.includes("opennow") && newChecked.includes("bestrated") && newChecked.includes("fastdelivery")) {
                        // console.log("7")
                        return (
                          <ListItemsComp
                            title={value.title}
                            time={value.time}
                            star={value.star}
                            charges={value.charges}
                            delivery={value.delivery}
                            tags={value.tags}
                            key={index}
                            image={value.image}
                          />
                        );
                      }
                  }



                //   if (newChecked.includes("bestrated")) {
                //     if (parseInt(value.star) > 4.5) {
                //       return (
                //         <ListItemsComp
                //           title={value.title}
                //           time={value.time}
                //           star={value.star}
                //           charges={value.charges}
                //           delivery={value.delivery}
                //           tags={value.tags}
                //           key={index}
                //           image={value.image}
                //         />
                //       );
                //     }
                //   }

                //   if(newChecked.includes("fastdelivery")){
                //     if (parseInt(value.time) < 13) {
                //         return (
                //           <ListItemsComp
                //             title={value.title}
                //             time={value.time}
                //             star={value.star}
                //             charges={value.charges}
                //             delivery={value.delivery}
                //             tags={value.tags}
                //             key={index}
                //             image={value.image}
                //           />
                //         );
                //       }
                //   }
                  
                  
                  
                  return ""
                })
              : console.log("not")
              }
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSide;
