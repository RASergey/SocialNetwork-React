import style from '../../styles/stylesSettingsPage/Settings.module.scss';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const Settings = () => {

	return (
		<div>
			<div className={style.Settings}>
				<h2 className='title'>Settings</h2>
			</div>
		</div>
	);
};

export default withAuthRedirect(Settings);