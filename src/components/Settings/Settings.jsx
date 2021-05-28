import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import style from './Settings.module.css';

const Settings = () => {
	return (
		<div>
			<div className={style.Settings}>
				<h2 className='title'>Settings</h2>
			</div>
		</div>
	)
}

export default compose(
	withAuthRedirect
)(Settings)