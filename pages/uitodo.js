import Nav from "../components/common/Nav";
import {
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiReact,
  SiSocketDotIo,
} from 'react-icons/si';
import Image from 'next/image';
import Github from '../components/common/Github';
import ProjectHeader from "../components/common/ProjectHeader";
import styles from '../styles/projectpage.module.scss';

export default function Geovote() {
  return (
    <>
      <Nav color="#09f"/>
      <ProjectHeader name="uitodo">
        <SiHtml5 />
        <SiCss3 />
        <SiTypescript />
        <SiReact />
        <SiSocketDotIo />
      </ProjectHeader>
      <article className={styles.uitodo}>
        <div className={styles.slideOne}>
          <Image 
            className={styles.image}
            src="/img/uitodo/Screen.png"
            width={500}
            height={500}
            draggable={false}
          />
          <div className={styles.text}>
            <h2>Minimalism speaks for itself.</h2>
            <p>
              No creating an account, no logging in; just jump right in! This application
              is built with minimalism and laziness in mind.
            </p>
          </div>
        </div>
        <div className={styles.slideTwo}>
          <div className={styles.text}>
            <h2>Collaboration. Pure.</h2>
            <p>
              Native Google Docs-like collaboration is built-in to this application. You
              can share with up to 100 partners, to write, edit, and view together.
            </p>
          </div>
          <Image 
            className={styles.image}
            src="/img/uitodo/Screen2.png"
            width={500}
            height={500}
            draggable={false}
          />
        </div>
      </article>
      <Github url="https://github.com/AlanoxSwe/collaborative-reminders-app" />
    </>
  ); 
}