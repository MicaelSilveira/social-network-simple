import React from "react";
import styles from "./Input.module.css";
const Input = ({ label, type, name, error, value, onChange, validade }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={() => validade()}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
