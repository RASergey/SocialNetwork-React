import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getAuthUserData, setlogOut } from '../../redux/authReducer';

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.getAuthUserData();
	}

	render() {
		return (
			<Header {...this.props} setlogOut={this.props.setlogOut} />
		)
	}

}
let mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
});

export default connect(mapStateToProps, { getAuthUserData, setlogOut })(HeaderContainer);