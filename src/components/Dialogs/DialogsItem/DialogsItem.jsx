import { NavLink } from 'react-router-dom';
import s from './DialogsItem.module.css';

const DialogsItem = (props) => {
	let path = '/dialogs/' + props.id;

	return (
		<div>
			<NavLink className={s.dialog + ' ' + s.active} to={path}>
				<div className={s.avatarWrapper}>
					<img className={s.avatar} src={props.avatar} alt="avatar" />
				</div>
				<span className={s.name}>{props.name}</span>
			</NavLink>
		</div>
	)
}

export default DialogsItem;