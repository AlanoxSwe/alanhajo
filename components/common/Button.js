import Link from 'next/link';
import styles from '../../styles/common.module.scss';

const Button = ({ type, children, url }) => {
  return (
    <Link href={url ? url : ''}>
      <button className={`${styles.btn} ${type && styles[type]}`}>
        {children}
      </button>
    </Link>
  ); 
};

export default Button;
