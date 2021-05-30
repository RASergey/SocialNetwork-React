import { connect } from "react-redux";
import ProfileInfo from './ProfileInfo';
import { updateUserStatus } from '../../../redux/profileReducer';

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	authorizedUserId: state.auth.userId,
	isFetching: state.usersPage.isFetching,
})

export default connect(mapStateToProps, { updateUserStatus })(ProfileInfo);