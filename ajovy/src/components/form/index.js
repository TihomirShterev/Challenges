import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./index.module.css";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.head}>
          <span>SIGN UP FOR UPDATES</span>
        </div>
        <div className={styles.information}>
          <div className={styles.fname}>
            <label htmlFor="fname">FIRST*</label>
            <input
              type="text"
              name="firstName"
              id="fname"
              ref={register({ required: true, maxLength: 10 })}
            />
          </div>
          <div className={styles.lname}>
            <label htmlFor="lname">LAST*</label>
            <input
              type="text"
              name="lastName"
              id="lname"
              ref={register({ required: true, maxLength: 10 })}
            />
          </div>
        </div>
        <div className={styles.email}>
          <label htmlFor="email">EMAIL*</label>
          <input
            type="email"
            name="email"
            id="email"
            ref={register({ required: true })}
          />
        </div>

        <div className={styles.checks}>
          <div>
            <input
              type="checkbox"
              placeholder="Age Disclaimer"
              name="Age Disclaimer"
              ref={register({ required: true })}
            />
            <span>*I am 18 years of age or older</span>
          </div>
          <div>
            <input
              type="checkbox"
              placeholder="TOS Disclaimer"
              name="TOS Disclaimer"
              ref={register({ required: true })}
            />
            <span>*I agree to the statements below and have read the TOS</span>
          </div>
        </div>
        <div className={styles.paragraphs}>
          <p>*Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat minus soluta rem natus reiciendis totam, quidem commodi? Amet eaque quisquam necessitatibus qui illum, a esse! Consectetur, nobis! Quam, consectetur distinctio.</p>
          <p>*Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia odio corporis illum repellendus, placeat voluptatibus cumque, sint fuga sunt ipsa quos ipsam deserunt laborum, maxime omnis. Architecto, velit aut?</p>
        </div>

        <div className={styles.submit}>
          <input type="submit" value="SUBMIT"></input>
        </div>
      </form>
    </div>
  );
};

export default Form;
