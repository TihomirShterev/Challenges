import React, { useState } from 'react';
import styles from './index.module.css';
import iconMail from "../../assets/interactive icons/icn_mail_default.svg";
import iconMailClicked from "../../assets/interactive icons/icn_mail_down.svg";
import iconMailHovered from "../../assets/interactive icons/icn_mail_hover.svg";

const Buttons = () => {
  const [hoveredLightBtn, setHoveredLightBtn] = useState(false);
  const [clickedLightBtn, setClickedLightBtn] = useState(false);

  const handleHoverLightBtn = () => {
    setHoveredLightBtn(true);
  };

  const handleHoverOutLightBtn = () => {
    setHoveredLightBtn(false);
    setClickedLightBtn(false);
  };

  const handleClickLightBtn = () => {
    setClickedLightBtn(false);
  };

  return (
    <article className={styles["light-btn-container"]}>
      <div
        className={hoveredLightBtn ? styles["light-btn-hover"] : styles["light-btn"]}
        onMouseEnter={handleHoverLightBtn}
        onMouseLeave={handleHoverOutLightBtn}
        onClick={handleClickLightBtn}
      >
        <img
          src={hoveredLightBtn ? (clickedLightBtn ? iconMailClicked : iconMailHovered) : iconMail}
          className={styles["light-btn-icon"]}
        ></img>
        <span className={hoveredLightBtn ? styles["light-btn-text-hover"] : styles["light-btn-text"]}>
          STAY CONNECTED
          </span>
      </div>
    </article>
  );
};

export default Buttons;