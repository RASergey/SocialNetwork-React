import { connect } from 'react-redux';
import Navbar from './Navbar';

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth
	}
}

const NavBarContainer = connect(mapStateToProps)(Navbar);

export default NavBarContainer;