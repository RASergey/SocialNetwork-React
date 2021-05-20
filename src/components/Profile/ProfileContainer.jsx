import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import Profile from './Profile';
import Preloader from '../common/Preloader/Preloader'
import { getUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 17037;
		}
		this.props.getUserProfile(userId);
	}

	render() {
		if (!this.props.isAuth) return <Redirect to={'/login'} />;

		return (<>
			<Preloader isFetching={this.props.isFetching} />
			<Profile profile={this.props.profile} />
		</>
		)
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	isFetching: state.profilePage.isFetching,
	isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);