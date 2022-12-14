import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import mayonnaiseLid from "../../assets/mayonnaise-lid.png";
import "./Lid.css";

interface props {
  getBtnId: Function;
  setHeaderText: Function;
}

const Lid: React.FC<props> = ({ getBtnId, setHeaderText }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const navigate = useNavigate();

  const moveToRandomizer = (): void => {
    setIsClicked(false);
    getBtnId(2);
    setHeaderText("Your Mayonnaise Of The Day Is...");
    navigate("../todays-mayonnaise");
  };

  return (
    <div className='lid_container justify-items_center'>
      {isClicked && (
        <OutsideClickHandler onOutsideClick={() => setIsClicked(false)}>
          <button className='you-sure_btn' onClick={() => moveToRandomizer()}>
            You sure?<br></br> It's only once a day
          </button>
        </OutsideClickHandler>
      )}
      <button
        className='mix-my-day_btn'
        onClick={() => setIsClicked(!isClicked)}
      >
        Mix My Day!
      </button>
      <img src={mayonnaiseLid} alt='mayonnaise lid' />
    </div>
  );
};

export default Lid;
