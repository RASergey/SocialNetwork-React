import { connect } from 'react-redux';
import RowFriends from './RowFriends';

let mapStateToProps = (state) => {
	return {
		friends: state.sideBar.friends
	}
}

const RowFriendsContainer = connect(mapStateToProps)(RowFriends);

export default RowFriendsContainer;