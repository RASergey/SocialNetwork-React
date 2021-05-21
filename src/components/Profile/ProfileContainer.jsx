import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import Preloader from '../common/Preloader/Preloader'
import { getUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 17037;
		}
		this.props.getUserProfile(userId);
	}

	render() {
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
})

export default compose(
	connect(mapStateToProps, { getUserProfile }),
	withRouter,
	withAuthRedirect
)(ProfileContainer)