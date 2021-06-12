import style from '../../styles/stylesNavbar/Navbar.module.scss';
import RowFriends from './RowFriends/RowFriends';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuth, getUserId } from '../../redux/autch-selectors';
import { memo } from 'react';

const Navbar = memo(() => {

	const isAuth = useSelector(getIsAuth);
	const userId = useSelector(getUserId);

	return (
		<nav className={style.navBar + ' ' + (!isAuth ? style.navBarNone : '')}>
			<div>
				<NavLink className={style.item} activeClassName={style.active} to={`/profile/${userId}`}>Profile</NavLink>
			</div>
			<div>
				<NavLink className={style.item} activeClassName={style.active} to='/dialogs'>Messages</NavLink>
			</div>
			<div>
				<NavLink className={style.item} activeClassName={style.active} to='/news'>News</NavLink>
			</div>
			<div>
				<NavLink className={style.item} activeClassName={style.active} to='/music'>Music</NavLink>
			</div>
			<div>
				<NavLink className={style.item} activeClassName={style.active} to='/users'>Find Users</NavLink>
			</div>
			<div className={style.friends}>
				<NavLink className={style.item} activeClassName={style.active} to='/friends'>Friends</NavLink>
			</div>
			<div className={style.rowFriends}>
				<RowFriends />
			</div>
			<div className={style.settings}>
				<NavLink className={style.item} activeClassName={style.active} to='/settings'>Settings</NavLink>
			</div>
		</nav>
	);
});

export default Navbar;