import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Users.module.css';
import userPhoto from '../../assets/images/avatar.png'

const Users = (props) => {
	let pagesCount = props.totalUsersCount / props.pageSize
	let pages = []

	for (let i = 1; i <= Math.ceil(pagesCount); i++) {
		pages.push(i);
	}

	return (
		<div className={style.users}>
			<h2 className='title'>Users</h2>
			<ul className={style.rowPage}>
				{pages.map(p => {
					return <li className={props.currentPage === p ? style.selectedPage : null}
						onClick={(e) => { props.onPageChanged(p); }} key={p}>{p}</li>
				})}
			</ul>
			<div className={style.rowUsers}>
				{
					props.users.map(u =>
						<div className={style.itemUserWrapper} key={u.id}>
							<div className={style.itemUser}>
								<div className={style.userAvatar}>
									<NavLink to={'/profile/' + u.id}>
										<img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar" />
									</NavLink>
								</div>
								<div className={style.textUser}>
									<NavLink to={'/profile/' + u.id}>
										{u.name}
									</NavLink>
									<address>
										{'u.location.city'}, {'u.location.country'}
									</address>
									<span>
										{u.status}
									</span>
								</div>
							</div>
							{
								u.followed ?
									<button onClick={() => { props.unFollow(u.id) }}>UnFollow</button> :
									<button onClick={() => { props.follow(u.id) }}>Follow</button>
							}
						</div>
					)
				}
			</div>
			<div className={style.showMore}>
				<button>Show More</button>
			</div>
		</div>
	)
}

export default Users;