import React from 'react';
import styles from '../../styles/projectpage.module.scss';

const ProjectHeader = ({ name, children }) => {
  return (
    <header className={styles.header}>
      <p className={styles.preTitle}>
        INTRODUCING PROJECT
      </p>
      <h1 className={styles.title}>
        {name}
      </h1>
      <div className={styles.icons}>
        { React.Children.map(children, child => <i>{child}</i>) }
      </div>
    </header>
  );
};

export default ProjectHeader;
