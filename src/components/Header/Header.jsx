import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = (props) => {

	return (
		<header className={style.header}>
			<div className={style.loginBlock}>
				<img
					className={style.hederImg}
					src='https://www.tctmagazine.com/downloads/8332/download/Autodesk-logo.png?cb=05a923bcee4fbbc61e67476114315d4c&w=2272&h='
					alt='/' />
				<span className={style.login}>
					{props.isAuth ? props.login : null}
				</span>
			</div>
			<div className={style.rowButton}>
				{props.isAuth ||
					<button><NavLink to='/login'>Sign In</NavLink></button>
				}
				{!props.isAuth ||
					<button onClick={() => props.setlogOut()}><NavLink to='/login'>log Out</NavLink></button>
				}
			</div>
		</header>
	);
}

export default Header;