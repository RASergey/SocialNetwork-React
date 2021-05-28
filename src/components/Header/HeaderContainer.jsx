import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setlogout, getAuthUserData } from '../../redux/authReducer';

class HeaderContainer extends React.Component {

	componentDidMount() {
		this.props.getAuthUserData();
	}

	render() {
		return (
			<Header {...this.props} setlogout={this.props.setlogout} />
		)
	}

}
let mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
});

export default connect(mapStateToProps, { setlogout, getAuthUserData })(HeaderContainer);