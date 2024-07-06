import React from 'react';
import styles from "./ChitBox.module.css";

const ChitBox = () => {
  return (
    <>
      <div className={styles.Box}>
        <div className={styles.titleContainer}>
            <div className={styles.title}>Mixedfruit scheme chit</div>
            <div className={styles.subtitle}>hide n seek limited</div>
        </div>
        <div className={styles.columnContainer}>
            <div className={styles.columns}>
                <div className={styles.heading}>Amount</div>
                <div className={styles.subheading}>10,000</div>
            </div>
            <span></span>
            <div className={styles.columns}>
                <div className={styles.heading}>Max payment</div>
                <div className={styles.subheading}>100</div>
            </div>
            <span></span>
            <div className={styles.columns}>
                <div className={styles.heading}>Tenure</div>
                <div className={styles.subheading}>20 Months</div>
            </div>
        </div>
      </div>
    </>
  );
};

export default ChitBox;