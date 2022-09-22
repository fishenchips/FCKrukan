import React from "react";

/* TODO - read about images and best practice in DB 
    Create a Link around below to the individual player page where rest of info will be shown
*/

function PlayerDetail(props) {
  return (
    <li>
      <div onClick={playerPageHandler}>
        <h4>
          {props.firstName} {props.lastName}
        </h4>
        {/* <img src={props.image} /> */}
      </div>
    </li>
  );
}

export default PlayerDetail;
