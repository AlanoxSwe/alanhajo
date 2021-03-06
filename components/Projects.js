import styles from '../styles/projects.module.scss';
import Tilt from './common/Tilt';
import Button from './common/Button';

const Projects = () => {
  
  return (
    <section className={styles.projects} id="projects">
      <h1 className={styles.title}>My Projects</h1>
      <div className={styles.items}>
        <Tilt title="Should-I-Go" bg={require('../public/img/1.png')} url="/should-i-go">
          Visitation density tracking web-app
        </Tilt>
        <Tilt title="Geovote" bg={require('../public/img/2.png')} url="/geovote">
          Geolocation-based voting app mockup
        </Tilt>
        <Tilt title="Webcord" bg={require('../public/img/3.png')} url="/webcord">
          User-friendly Discord bot dashboard
        </Tilt>
        <Tilt title="uitodo" bg={require('../public/img/4.png')} url="/uitodo">
          Live collaborative to-do app
        </Tilt>
      </div>
      {/* <Button type="primary">
        More projects
      </Button> */}
    </section>
  );
};

export default Projects;