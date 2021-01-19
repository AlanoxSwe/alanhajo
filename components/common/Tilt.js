import Link from 'next/link';
import styles from '../../styles/common.module.scss';

const Tilt = ({ bg, title, url, children }) => {

  const handleMove = (e) => {
    let el = e.currentTarget;
    const height = el.clientHeight
    const width = el.clientWidth
    const xVal = e.nativeEvent.layerX
    const yVal = e.nativeEvent.layerY
    const yRotation = 20 * ((xVal - width / 2) / width)
    const xRotation = -20 * ((yVal - height / 2) / height)
    const string = 'perspective(1000px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
    el.style.transform = string
  }

  const handleOut = (e) => e.currentTarget.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
  const handleDown = (e) => e.currentTarget.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
  const handleUp = (e) => e.currentTarget.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)';

  return (
    <>
      <Link href={url ? url : '/'}>
        <div
          className={styles.tilt}
          onMouseMove={(e) => handleMove(e)}
          onMouseOut={e => handleOut(e)}
          onMouseDown={e => handleDown(e)}
          onMouseUp={e => handleUp(e)}
          style={bg && { backgroundImage: `url(${bg})` }}
        >
          <div className={styles.projectDetails}>
            <p className={styles.title}>{title}</p>
            <p>{children}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Tilt;
