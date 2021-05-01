import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {
	return (
		<StoreContext.Consumer>
			{ (store) => {
				let state = store.getState();

				return <Dialogs dialogsPage={state.dialogsPage} />
			}}
		</StoreContext.Consumer>
	)
}

export default DialogsContainer;