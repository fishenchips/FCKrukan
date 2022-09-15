import React, { useRef } from "react";
import styles from "./NewPlayerForm.module.css";
import { motion } from "framer-motion";
import { inputTap } from "./../../styles/animations";

function NewPlayerForm(props) {
  let years = [];
  let d = new Date();
  let currentYear = d.getFullYear();

  for (let i = currentYear - 15; i > currentYear - 50; i--) {
    years.push(i);
  }

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const imageInputRef = useRef();
  const yearInputRef = useRef();
  const positionInputRef = useRef();
  const footInputRef = useRef();
  const parentClubInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredYear = yearInputRef.current.value;
    const enteredPosition = positionInputRef.current.value;
    const enteredFoot = footInputRef.current.value;
    const enteredParentClub = parentClubInputRef.current.value;

    const playerData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      image: enteredImage,
      year: enteredYear,
      position: enteredPosition,
      foot: enteredFoot,
      parentClub: enteredParentClub,
    };

    /* want to send up data to the new player (ny-spelare) page */
    props.onAddPlayer(playerData);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles.formControl}>
        <label>Förnamn</label>
        <motion.input
          whileTap="tap"
          variants={inputTap}
          type="text"
          ref={firstNameInputRef}
        />
      </div>
      <div className={styles.formControl}>
        <label>Efternamn</label>
        <input type="text" ref={lastNameInputRef} />
      </div>
      <div className={styles.formControl}>
        <label>Bild</label>
        <input type="file" ref={imageInputRef} />
      </div>
      <div className={styles.formControl}>
        <label>Födelseår</label>
        <select ref={yearInputRef}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.formControl}>
        <label>Position</label>
        {/* needs more precision, and able to choose serveral positions */}
        <select ref={positionInputRef}>
          <option value="goal-keeper">Målvakt</option>
          <option value="defender">Back</option>
          <option value="midfielder">Mittfält</option>
          <option value="striker">Anfall</option>
        </select>
      </div>
      <div className={styles.formControl}>
        <label>Fot</label>
        <select ref={footInputRef}>
          <option value="right">Höger</option>
          <option value="left">Vänster</option>
          <option value="both">Dubbelfotad</option>
        </select>
      </div>
      <div className={styles.formControl}>
        <label>Moderklubb</label>
        <input type="text" ref={parentClubInputRef} />
      </div>
      <div>
        <button>Lägg till Spelare</button>
      </div>
    </form>
  );
}

export default NewPlayerForm;
