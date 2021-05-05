import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';
import RowFriendsContainer from './RowFriends/RowFriendsContainer';

const Navbar = (props) => {
	return (
		<nav className={style.navBar}>
			<div>
				<NavLink className={style.item} activeClassName={style.active} to='/profile'>Profile</NavLink>
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
				<RowFriendsContainer store={props.store} />
			</div>
			<div className={style.settings}>
				<NavLink className={style.item} activeClassName={style.active} to='/settings'>Settings</NavLink>
			</div>
		</nav>
	)
}
export default Navbar;