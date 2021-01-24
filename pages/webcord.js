import Nav from "../components/common/Nav";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiDiscord,
} from 'react-icons/si';
import Image from 'next/image';
import Github from '../components/common/Github';
import ProjectHeader from "../components/common/ProjectHeader";
import styles from '../styles/projectpage.module.scss';

export default function Geovote() {
  return (
    <>
      <Nav color="#000"/>
      <ProjectHeader name="Webcord">
        <SiHtml5 />
        <SiCss3 />
        <SiJavascript />
        <SiReact />
        <SiDiscord />
      </ProjectHeader>
      <article className={styles.webcord}>
        <div className={styles.slideOne}>
          <Image 
            className={styles.image}
            src="/img/webcord/Screen.png"
            width={500}
            height={500}
            draggable={false}
          />
          <div className={styles.text}>
            <h2>Settings. Right at your fingertips.</h2>
            <p>
              No coding, no commands, no confusion. Modify your bot straight
              from your browser with a simple user interface.
            </p>
          </div>
        </div>
        <div className={styles.slideTwo}>
          <div className={styles.text}>
            <h2>Quick. Simple. Flawless.</h2>
            <p>
              With no middlewares slowing the bot down, you can expect interactions
              within milliseconds from your requests. This bot is quick as lightning.
            </p>
          </div>
          <Image 
            className={styles.image}
            src="/img/webcord/Screen2.png"
            width={500}
            height={187.79}
            draggable={false}
          />
        </div>
      </article>
      <Github url="https://github.com/AlanoxSwe/webcord" />
    </>
  ); 
}