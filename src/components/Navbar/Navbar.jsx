import { NavLink } from 'react-router-dom';
import RowFriends from './RowFriends/RowFriends';
import s from './Navbar.module.css';

const Navbar = (props) => {
	return (
		<nav className={s.navBar}>
			<div>
				<NavLink className={s.item} activeClassName={s.active} to='/profile'>Profile</NavLink>
			</div>
			<div>
				<NavLink className={s.item} activeClassName={s.active} to='/dialogs'>Messages</NavLink>
			</div>
			<div>
				<NavLink className={s.item} activeClassName={s.active} to='/news'>News</NavLink>
			</div>
			<div>
				<NavLink className={s.item} activeClassName={s.active} to='/music'>Music</NavLink>
			</div>
			<div className={s.friends}>
				<NavLink className={s.item} activeClassName={s.active} to='/friends'>Friends</NavLink>
			</div>
			<div className={s.rowFriends}>
				<RowFriends friends={props.state.friends} />
			</div>
			<div className={s.settings}>
				<NavLink className={s.item} activeClassName={s.active} to='/settings'>Settings</NavLink>
			</div>
		</nav>
	)
}

export default Navbar;