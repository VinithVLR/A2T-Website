import React from 'react';
import styles from './Skeleton.module.scss';

const Skeleton = () => {
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonItemLarge}></div>
      <div className={styles.skeletonItemSmall}></div>
      <div className={styles.skeletonItemSmall}></div>
    </div>
  );
};

export default Skeleton;