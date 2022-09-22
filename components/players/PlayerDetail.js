import React from "react";
import { useRouter } from "next/router";

/* TODO - read about images and best practice in DB 
    Create a Link around below to the individual player page where rest of info will be shown
*/

/* dont need to send anything down as it will come from pages/truppen/[playerId]/index.js */
/* Only need to link to the correct page, using next/router */
function PlayerDetail(props) {
  const router = useRouter();

  const playerPageHandler = () => {
    router.push("/truppen/" + props.id);
  };

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
