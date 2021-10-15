import styles from './Button.module.css';
import React from 'react';

function Button(props:any) {
  const { text, clickHandler,customStyle } = props;
  // debugger;
  const btnStyle = customStyle? [customStyle, styles.actionBtn].join(' ') : styles.actionBtn;
  return <button className={btnStyle} onClick={clickHandler}> {text} </button>;
}

export default Button;
