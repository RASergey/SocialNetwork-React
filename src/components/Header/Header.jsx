import s from './Header.module.css';

const Header = () => {
	return (
		<header className={s.header}>
			<img
				className={s.hederImg}
				src='https://www.tctmagazine.com/downloads/8332/download/Autodesk-logo.png?cb=05a923bcee4fbbc61e67476114315d4c&w=2272&h='
				alt='/' />
		</header>
	);
}

export default Header;