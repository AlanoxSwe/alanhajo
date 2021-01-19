import Link from 'next/link';
import style from '../../styles/common.module.scss';

const Button = ({ type, children, url }) => {
  return (
    <Link href={url ? url : ''}>
      <button className={`${style.btn} ${type && style[type]}`}>
        {children}
      </button>
    </Link>
  ); 
};

export default Button;
