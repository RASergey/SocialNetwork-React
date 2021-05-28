import { connect } from 'react-redux';
import Navbar from './Navbar';

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		userId: state.auth.userId
	}
}

const NavBarContainer = connect(mapStateToProps)(Navbar);

export default NavBarContainer;