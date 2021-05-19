import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = (props) => {
	return (
		<header className={style.header}>
			<img
				className={style.hederImg}
				src='https://www.tctmagazine.com/downloads/8332/download/Autodesk-logo.png?cb=05a923bcee4fbbc61e67476114315d4c&w=2272&h='
				alt='/' />
			<span className={style.loginBlock}>
				{props.isAuth ? props.login : <NavLink to='/login'>'Login'</NavLink>}
			</span>
		</header>
	);
}

export default Header;