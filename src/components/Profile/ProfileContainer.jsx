import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import Preloader from '../common/Preloader/Preloader'
import { setUserProfile, toggleIsFetching } from '../../redux/profileReducer';
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 17037;
		}
		this.props.toggleIsFetching(true)
		axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
			.then(response => {
				this.props.setUserProfile(response.data);
			})
			.finally(() => {
				this.props.toggleIsFetching(false);
			})
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
	isFetching: state.profilePage.isFetching
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile, toggleIsFetching })(WithUrlDataContainerComponent);