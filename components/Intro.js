import Image from 'next/image';
import Button from './common/Button';
import style from '../styles/intro.module.scss';
import { IoIosArrowDown } from 'react-icons/io';
import Fade from 'react-reveal/Fade';

const Intro = () => {
	return (
		<section className={style.intro}>
			<div className={style.heading}>
				<div className={style.introText}>
					<Fade top>
					<h1>Hello, I'm Alan Hajo</h1>
					<h2>Full-Stack Developer based in Stockholm, Sweden</h2>
					</Fade>
				</div>
				<div className={style.introImage}>
					<Image
						src="/img/face.png"
						width={500}
						height={500}
					/>
				</div>
			</div>
			<div className={style.navigation}>
				<Button type="link" url="#projects">
					Read more
					<br />
					<IoIosArrowDown style={{fontSize: '2rem'}}/>
				</Button>
			</div>
		</section>
	);
};

export default Intro;
