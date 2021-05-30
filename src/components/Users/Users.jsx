import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Users.module.css';
import userPhoto from '../../assets/images/avatar.png'

const Users = (props) => {
	const { listPageNumbers, lastUsersPage } = props.getlistPageNumbers();
	const firstPage = props.currentPage < 4 ? style.noBlock : null;
	const lastPage = props.currentPage > lastUsersPage - 10 ? style.noBlock : null;

	return (
		<div className={style.users}>
			<h2 className='title'>Users</h2>
			<ul className={style.rowPage}>
				<li className={firstPage} onClick={() => { props.onPageChanged(1) }} >{'<<'}</li>
				<li className={firstPage} onClick={() => { props.onPageChanged(props.currentPage - 1) }} >{'<'}</li>
				{listPageNumbers.map(p => {
					return <li className={props.currentPage === p ? style.selectedPage : null}
						onClick={() => { props.onPageChanged(p); }} key={p}>{p}</li>
				})}
				<li className={lastPage} onClick={() => { props.onPageChanged(props.currentPage + 1) }} >{'>'}</li>
				<li className={lastPage} onClick={() => { props.onPageChanged(lastUsersPage) }} >{'>>'}</li>
			</ul>
			<div className={style.rowUsers}>
				{
					props.users.map(u =>
						<div className={style.itemUserWrapper} key={u.id}>
							<NavLink to={'/profile/' + u.id}>
								<div className={style.itemUser}>
									<div className={style.userAvatar}>
										<img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar" />
									</div>
									<div className={style.textUser}>
										{u.name}
										<address>
											{'u.location.city'}, {'u.location.country'}
										</address>
										<span>
											{u.status}
										</span>
									</div>
								</div>
							</NavLink>
							{
								u.followed
									? <button disabled={props.isFollowingInProgress.some(id => id === u.id)}
										onClick={() => {
											props.unFollow(u.id)
										}}>UnFollow
									</button>
									: <button disabled={props.isFollowingInProgress.some(id => id === u.id)}
										onClick={() => {
											props.follow(u.id);
										}}>Follow
									</button>
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