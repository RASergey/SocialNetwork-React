import { NavLink } from 'react-router-dom';
import style from './ItemFriend.module.css';

const ItemFriend = (props) => {
	let path = '/friend/' + props.id;

	return (
		<div className={style.friendItem + ' ' + style.active}>
			<NavLink className={style.friendLink} to={path}>
				<img className={style.avatar} src={props.avatar} alt="avatar" />
				<span className={style.name}>{props.name}</span>
			</NavLink>
		</div>
	)
}

export default ItemFriend;