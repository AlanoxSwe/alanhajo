import Nav from "../components/common/Nav";
import {
  SiAdobephotoshop,
  SiFigma
} from 'react-icons/si';
import Image from 'next/image';
import ProjectHeader from "../components/common/ProjectHeader";
import styles from '../styles/projectpage.module.scss';

export default function Geovote() {
  return (
    <>
      <Nav color="#6C63FF"/>
      <ProjectHeader name="Geovote">
        <SiAdobephotoshop />
        <SiFigma />
      </ProjectHeader>
      <article className={styles.geovote}>
        <div className={styles.slideOne}>
          <Image 
            className={styles.image}
            src="/img/geovote/Screen.png"
            width={500}
            height={500}
            draggable={false}
          />
          <div className={styles.text}>
            <h2>Vote from the comfort of your home.</h2>
            <p>
              With Geovote, you can vote digitally, from the comfort of
              your home as well as from abroad, using innovative identification
              methods.
            </p>
          </div>
        </div>
        <div className={styles.slideTwo}>
          <div className={styles.text}>
            <h2>Identify with Swedish BankID.</h2>
            <p>
              Easily vote from home with the technology oof BankID. Don't have it?
              No worries. We have another solution where you identify yourself with
              standard digital identification processes.
            </p>
          </div>
          <Image 
            className={styles.image}
            src="/img/geovote/Screen2.png"
            width={500}
            height={500}
            draggable={false}
          />
        </div>
        <div className={styles.slideThree}>
          <div className={styles.text}>
            <h2>Finish your duties.</h2>
            <p>
              Do the nation the favor of voting. Efficiently, and simply, using Geovote.
            </p>
          </div>
          <Image 
            className={styles.image}
            src="/img/geovote/Screen3.png"
            width={500}
            height={500}
            draggable={false}
          />
        </div>
      </article>
    </>
  ); 
}