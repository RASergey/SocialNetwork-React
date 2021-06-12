import style from '../../styles/stylesFriendsPage/Friends.module.scss';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const Friends = () => {
	return (
		<div>
			<div className={style.friends}>
				<h2 className='title'>Friends</h2>
			</div>
		</div>
	);
};

export default withAuthRedirect(Friends);