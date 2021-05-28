import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getUserStatus } from '../../redux/profileReducer';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		let authorizedUserId = this.props.authorizedUserId;

		if (!userId) {
			userId = authorizedUserId;
		}

		this.props.getUserProfile(userId);
		this.props.getUserStatus(userId);
	}

	render() {
		return (<>
			<Profile currentUserId={this.props.match.params.userId || this.props.authorizedUserId} />
		</>
		)
	}
}

let mapStateToProps = (state) => ({
	authorizedUserId: state.auth.userId
})

export default compose(
	connect(mapStateToProps, { getUserProfile, getUserStatus }),
	withRouter,
	withAuthRedirect
)(ProfileContainer)