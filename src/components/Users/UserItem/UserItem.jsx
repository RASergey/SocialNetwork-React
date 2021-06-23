import style from '../../../styles/stylesUsersPage/UserItem.module.scss';
import userPhoto from '../../../assets/images/avatar.png'
import { NavLink } from 'react-router-dom';
import { memo } from 'react';

const UserItem = memo(({ user, followingInProgress, unFollow, follow }) => {

	return (
		<div className={style.itemUserWrapper}>
			<NavLink to={'/profile/' + user.id}>
				<div className={style.itemUser}>
					<div className={style.userAvatar}>
						<img src={user.photos.small != null ? user.photos.small : userPhoto} alt="avatar" />
					</div>
					<div className={style.textUser}>
						{user.name}
						<address>
							{'u.location.city'}, {'u.location.country'}
						</address>
						<span>
							{user.status}
						</span>
					</div>
				</div>
			</NavLink>
			{
				user.followed
					? <button disabled={followingInProgress.some(userId => user.id === userId)}
						onClick={() => {
							unFollow(user.id)
						}}>UnFollow</button>
					: <button disabled={followingInProgress.some(userId => user.id === userId)}
						onClick={() => {
							follow(user.id);
						}}>Follow</button>
			}
		</div>
	);
});

export default UserItem;