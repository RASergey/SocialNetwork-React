import { NavLink } from 'react-router-dom';
import s from './ItemFriends.module.css';

const ItemFriends = (props) => {
	let path = '/friends/' + props.id;

	return (
		<div className={s.friendItem + ' ' + s.active}>
			<NavLink className={s.friendLink} to={path}>
				<img className={s.avatar} src={props.avatar} alt="avatar" />
				<span className={s.name}>{props.name}</span>
			</NavLink>
		</div>
	)
}

export default ItemFriends;