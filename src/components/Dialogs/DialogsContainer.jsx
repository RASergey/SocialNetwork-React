import { connect } from 'react-redux';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
		isAuth: state.auth.isAuth
	}
}

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;