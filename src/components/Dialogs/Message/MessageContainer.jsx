import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../redux/dialogsReducer';
import Message from './Message';

let mapStateToProps = (state) => {
	return {
		messages: state.dialogsPage.messages,
		newMessageBody: state.dialogsPage.newMessageBody
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: () => {
			dispatch(sendMessageCreator());
		},
		updateNewMessageBody: (body) => {
			let action = updateNewMessageBodyCreator(body);
			dispatch(action);
		}
	}
}

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);
export default MessageContainer;
