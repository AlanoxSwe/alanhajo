import styles from '../styles/skills.module.scss';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNodeDotJs,
  SiReact,
  SiRedux,
  SiCsharp,
} from 'react-icons/si';


const Skills = () => {
  return (
    <section className={styles.skills} id="projects">
      <div className={styles.iconContainer}>
        <i className={styles.icon}><SiHtml5 /></i>
        <p>HTML5</p>
      </div>
      <div className={styles.iconContainer}>
        <i className={styles.icon}><SiCss3 /></i>
        <p>CSS3</p>
      </div>
      <div className={styles.iconContainer}>
        <i className={styles.icon}><SiJavascript /></i>
        <p>JavaScript</p>
      </div>
      <div className={styles.iconContainer}>
        <i className={styles.icon}><SiTypescript /></i>
        <p>TypeScript</p>
      </div>
      <div className={styles.iconContainer}>
        <i className={styles.icon}><SiCsharp /></i>
        <p>C#</p>
      </div>
      <div className={styles.iconContainer}>
        <i className={styles.icon}><SiNodeDotJs /></i>
        <p>Node</p>
      </div>
      <div className={styles.iconContainer}>
        <i className={styles.icon}><SiReact /></i>
        <p>React</p>
      </div>
      <div className={styles.iconContainer}>
        <i className={styles.icon}><SiRedux /></i>
        <p>Redux</p>
      </div>
    </section>
  );  
};

export default Skills; 
