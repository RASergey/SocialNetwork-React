import style from '../../../../styles/stylesNavbar/ItemFriend.module.scss';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';

const ItemFriend = memo(({ id, avatar, name }) => {

	return (
		<div className={style.friendItem + ' ' + style.active}>
			<NavLink className={style.friendLink} to={`/friend/${id}`}>
				<img className={style.avatar} src={avatar} alt="avatar" />
				<span className={style.name}>{name}</span>
			</NavLink>
		</div>
	);
});

export default ItemFriend;