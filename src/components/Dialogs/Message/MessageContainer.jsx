import { connect } from 'react-redux';
import { sendMessage, updateNewMessageBody } from '../../../redux/dialogsReducer';
import Message from './Message';

let mapStateToProps = (state) => {
	return {
		messages: state.dialogsPage.messages,
		newMessageBody: state.dialogsPage.newMessageBody
	}
}

const MessageContainer = connect(mapStateToProps, { sendMessage, updateNewMessageBody })(Message);
export default MessageContainer;
