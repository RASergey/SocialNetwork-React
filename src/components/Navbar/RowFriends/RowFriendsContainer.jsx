import RowFriends from './RowFriends';

const RowFriendsContainer = (props) => {
	let state = props.store.getState();

	return <RowFriends friends={state.siteBar.friends} />
}

export default RowFriendsContainer;