import StoreContext from '../../../StoreContext';
import RowFriends from './RowFriends';

const RowFriendsContainer = () => {
	return (
		<StoreContext.Consumer>
			{ (store) => {
				let state = store.getState();

				return <RowFriends friends={state.siteBar.friends} />
			}}
		</StoreContext.Consumer>
	)
}


export default RowFriendsContainer;