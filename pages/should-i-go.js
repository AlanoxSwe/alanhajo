import Nav from "../components/common/Nav";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
} from 'react-icons/si';
import Image from 'next/image';
import ProjectHeader from "../components/common/ProjectHeader";
import styles from '../styles/projectpage.module.scss';
import Github from "../components/common/Github";

export default function ShouldIGo() {
  return (
    <>
      <Nav color="#222" />
      <ProjectHeader name="Should-I-Go">
        <SiHtml5 />
        <SiCss3 />
        <SiJavascript />
        <SiReact />
      </ProjectHeader>
      <article className={styles.shouldIGo}>
        <div className={styles.slideOne}>
          <Image 
            className={styles.image}
            src="/img/should-i-go/Screen.png"
            width={500}
            height={500}
            draggable={false}
          />
          <div className={styles.text}>
            <h2>Visit your favorite places safely.</h2>
            <p>
              The novel coronavirus covid-19 pandemic has drastically limited us
              from going to public areas. It may have felt difficult or scary to
              go to the local grocery store. This app solves this issue.
            </p>
          </div>
        </div>
        <div className={styles.slideTwo}>
          <div className={styles.text}>
            <h2>Find out the density. Before you take off.</h2>
            <p>
              All the information in the palm of your hand. No need to call the 
              local store to ask if it is safe to go. Instead, you can check immediately
              with your smartphone and expect reliable live data aggregated from Google's
              API.
            </p>
          </div>
          <Image 
            className={styles.image}
            src="/img/should-i-go/Screen2.png"
            width={500}
            height={500}
            draggable={false}
          />
        </div>
        <div className={styles.slideThree}>
          <Image 
            className={styles.image}
            src="/img/should-i-go/Screen3.png"
            width={500}
            height={500}
            draggable={false}
          />
          <div className={styles.text}>
            <h2>Love the Darkness.</h2>
            <p>
              With the built-in native dark mode you can easily switch from
              day to night.
            </p>
          </div>
        </div>
      </article>
      <Github url="https://github.com/mar-veloper/should-i-go" />
    </>
  ); 
}