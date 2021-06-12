import { NavLink } from 'react-router-dom';
import style from '../../../styles/stylesDialogsPage/DialogsItem.module.scss';

const DialogsItem = (props) => {
	let path = '/dialogs/' + props.id;

	return (
		<div>
			<NavLink className={style.dialog + ' ' + style.active} to={path}>
				<div className={style.avatarWrapper}>
					<img className={style.avatar} src={props.avatar} alt="avatar" />
				</div>
				<span className={style.name}>{props.name}</span>
			</NavLink>
		</div>
	)
}

export default DialogsItem;