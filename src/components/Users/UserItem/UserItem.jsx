import style from './UserItem.module.css';
import userPhoto from '../../../assets/images/avatar.png'
import { NavLink } from 'react-router-dom';
import { memo, useEffect, useState } from 'react';

const UserItem = memo(({ id, photoSmall, fullName, status, followed, followingInProgress, unFollow, follow }) => {

	const [userId, setUserId] = useState(0);

	useEffect(() => setUserId(id), [id])

	return (
		<div className={style.itemUserWrapper}>
			<NavLink to={'/profile/' + id}>
				<div className={style.itemUser}>
					<div className={style.userAvatar}>
						<img src={photoSmall != null ? photoSmall : userPhoto} alt="avatar" />
					</div>
					<div className={style.textUser}>
						{fullName}
						<address>
							{'u.location.city'}, {'u.location.country'}
						</address>
						<span>
							{status}
						</span>
					</div>
				</div>
			</NavLink>
			{
				followed
					? <button disabled={followingInProgress.some(id => id === userId)}
						onClick={() => {
							unFollow(id)
						}}>UnFollow</button>
					: <button disabled={followingInProgress.some(id => id === userId)}
						onClick={() => {
							follow(id);
						}}>Follow</button>
			}
		</div>
	)

});

export default UserItem;