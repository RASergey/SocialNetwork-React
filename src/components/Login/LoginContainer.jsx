import { connect } from "react-redux";
import Login from "./Login";
import { setLogin } from '../../redux/authReducer';

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth
	}
}

export default connect(mapStateToProps, { setLogin })(Login)