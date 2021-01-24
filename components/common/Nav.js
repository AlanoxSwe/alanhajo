import styles from '../../styles/common.module.scss';
import { IoIosArrowBack } from 'react-icons/io';
import Link from 'next/link';

const Header = ({ color }) => {
  return (
    <nav className={styles.header} style={{backgroundColor: color}}>
      <Link href="/">
        <li className={styles.item}>
          <IoIosArrowBack className={styles.arrow} /> All projects
        </li>
      </Link>
    </nav>
  );
};

export default Header;
