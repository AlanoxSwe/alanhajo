import React from 'react';
import {
  SiGithub
} from 'react-icons/si';
import Button from './Button';
import styles from '../../styles/projectpage.module.scss';

const Github = ({ url }) => {
  return (
    <section className={styles.github}>
      <h3>Explore the project</h3>
      <Button type="dark" url={url}>
        GitHub <SiGithub />
      </Button>
    </section>
  );
};

export default Github;
