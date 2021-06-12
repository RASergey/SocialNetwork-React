import style from '../../styles/stylesHeader/Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsAuth, getLogin } from '../../redux/autch-selectors';
import { useCallback } from 'react';
import { setlogout } from '../../redux/authReducer';
import { memo } from 'react';

const Header = memo(() => {

	const login = useSelector(getLogin);
	const isAuth = useSelector(getIsAuth);

	const dispath = useDispatch();

	const logOut = useCallback(() => {
		dispath(setlogout());
	}, [dispath]);

	return (
		<header className={style.header}>
			<div className={style.loginBlock}>
				<img
					className={style.headerImg}
					src='https://www.tctmagazine.com/downloads/8332/download/Autodesk-logo.png?cb=05a923bcee4fbbc61e67476114315d4c&w=2272&h='
					alt='/' />
			</div>
			<div className={style.rowButton}>
				<span className={style.login}>
					{isAuth ? login :
						<NavLink to='/users'><button>Users</button></NavLink>}
				</span>
				{isAuth ||
					<NavLink to='/login'><button>Sign In</button></NavLink>
				}
				{!isAuth ||
					<NavLink to='/login'><button onClick={() => logOut()}>log Out</button></NavLink>
				}
			</div>
		</header>
	);
});

export default Header;