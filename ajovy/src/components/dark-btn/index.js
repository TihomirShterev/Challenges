import React, { useState } from 'react';
import styles from './index.module.css';
import iconPI from "../../assets/interactive icons/icn_pi_default.svg";
import iconPIClicked from "../../assets/interactive icons/icn_pi_down.svg";
import iconPIHovered from "../../assets/interactive icons/icn_pi_hover.svg";

const DarkBtn = () => {
  const [hoveredDarkBtn, setHoveredDarkBtn] = useState(false);
  const [clickedDarkBtn, setClickedDarkBtn] = useState(false);

  const handleHoverDarkBtn = () => {
    setHoveredDarkBtn(true);
  };

  const handleHoverOutDarkBtn = () => {
    setHoveredDarkBtn(false);
    setClickedDarkBtn(false);
  };

  const handleClickDarkBtn = () => {
    setClickedDarkBtn(false);
  };

  return (
    <article className={styles["dark-btn-container"]}>
      <a href="/test.txt" download>
        <div
          className={hoveredDarkBtn ? styles["dark-btn-hover"] : styles["dark-btn"]}
          onMouseEnter={handleHoverDarkBtn}
          onMouseLeave={handleHoverOutDarkBtn}
          onClick={handleClickDarkBtn}
        >
          <img
            src={hoveredDarkBtn ? (clickedDarkBtn ? iconPIClicked : iconPIHovered) : iconPI}
            className={styles["dark-btn-icon"]}
          ></img>
          <span className={hoveredDarkBtn ? styles["dark-btn-text-hover"] : styles["dark-btn-text"]}>
            SEE PRESCRIBING INFORMATION
          </span>
        </div>
      </a>
    </article>
  );
};

export default DarkBtn;