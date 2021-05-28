import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import style from './Music.module.css';

const Music = () => {
	return (
		<div>
			<div className={style.music}>
				<h2 className='title'>Music</h2>
			</div>
		</div>
	)
}

export default compose(
	withAuthRedirect
)(Music)