import louding from '../../../assets/images/Spin-2.1s-131px.svg';
import style from './Preloader.module.css';

const Preloader = (props) => {
	return (
		<div className={style.wrapperPreloader}>
			{props.isFetching ? <img src={louding} alt={'loading'} /> : null}
		</div>
	)

}

export default Preloader;