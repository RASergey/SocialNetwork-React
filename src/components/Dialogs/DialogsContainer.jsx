import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
	let state = props.store.getState();

	return <Dialogs store={props.store} dialogsPage={state.dialogsPage} />
}

export default DialogsContainer;