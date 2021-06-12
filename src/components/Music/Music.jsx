import style from '../../styles/stylesMusicPage/Music.module.scss';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const Music = () => {

	return (
		<div>
			<div className={style.music}>
				<h2 className='title'>Music</h2>
			</div>
		</div>
	);
};

export default withAuthRedirect(Music);