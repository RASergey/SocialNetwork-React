import louding from '../../../assets/images/Spin-2.1s-131px.svg';
import style from './Preloader.module.css';

const Preloader = () => {

	return (
		<div className={style.wrapperPreloader}>
			<img src={louding} alt={'loading'} />
		</div>
	)

};

export default Preloader;