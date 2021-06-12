import style from '../../styles/stylesUsersPage/Users.module.scss';
import Paginator from './Paginator/Paginator';
import UserItem from './UserItem/UserItem';
import UsersSearchForm from './UsersSearchForm/UsersSearchForm';
import { memo, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPage, getPageSize, getUsers, getFollowingInProgress, getUsersFilter } from '../../redux/users-selectors';
import { requestUsers, unFollow, follow } from '../../redux/usersReducer';

const Users = memo(() => {

	const [isMount, setIsMaoun] = useState(true);

	const users = useSelector(getUsers);
	const currentPage = useSelector(getCurrentPage);
	const pageSize = useSelector(getPageSize);
	const followingInProgress = useSelector(getFollowingInProgress);
	const usersFilter = useSelector(getUsersFilter);

	const dispatch = useDispatch();

	useEffect(() => {
		if (isMount) {
			dispatch(requestUsers(currentPage, pageSize));
			setIsMaoun(false);
		}
	}, [isMount, dispatch, currentPage, pageSize]);

	const onPageChanged = useCallback((page) => {
		dispatch(requestUsers(page, pageSize, usersFilter.term));
	}, [dispatch, pageSize, usersFilter]);

	const onUnFollow = useCallback((userId) => {
		dispatch(unFollow(userId));
	}, [dispatch]);

	const onFollow = useCallback((userId) => {
		dispatch(follow(userId));
	}, [dispatch]);

	const onFilterChanged = (filter) => {
		dispatch(requestUsers(1, pageSize, filter.term));
	}

	const userItem = users.map(u =>
	(<UserItem
		photoSmall={u.photos.small}
		fullName={u.name}
		status={u.status}
		followed={u.followed}
		followingInProgress={followingInProgress}
		unFollow={onUnFollow}
		follow={onFollow}
		id={u.id}
		key={u.id} />));

	return (
		<div className={style.users}>
			<div className={style.usersHeader}>
				<h2 className='title'>Users</h2>
				<UsersSearchForm onFilterChanged={onFilterChanged} />
			</div>
			<Paginator
				onPageChanged={onPageChanged}
				currentPage={currentPage}
				pageSize={pageSize} />
			<div className={style.rowUsers}>
				{userItem}
			</div>
		</div>
	)

});

export default Users;