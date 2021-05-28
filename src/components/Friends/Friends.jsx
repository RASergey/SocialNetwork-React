import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import style from './Friends.module.css';

const Friends = () => {
	return (
		<div>
			<div className={style.friends}>
				<h2 className='title'>Friends</h2>
			</div>
		</div>
	)
}

export default compose(
	withAuthRedirect
)(Friends)