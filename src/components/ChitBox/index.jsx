import React from 'react';
import styles from "./ChitBox.module.css";

const ChitBox = (props) => {
  return (
    <div style={{paddingBlock: '0.5rem'}}>
      <div className={styles.Box}>
        <div className={styles.titleContainer}>
            <div className={styles.title}>{props.chitName}</div>
            <div className={styles.subtitle}>{props.companyName}</div>
        </div>
        <div className={styles.columnContainer}>
            <div className={styles.columns}>
                <div className={styles.heading}>Amount</div>
                <div className={styles.subheading}>{props.amount}</div>
            </div>
            <span></span>
            <div className={styles.columns}>
                <div className={styles.heading}>Max payment</div>
                <div className={styles.subheading}>{props.maxPayment}</div>
            </div>
            <span></span>
            <div className={styles.columns}>
                <div className={styles.heading}>Tenure</div>
                <div className={styles.subheading}>{props.tenure}</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ChitBox;