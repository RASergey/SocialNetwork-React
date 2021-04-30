import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../redux/dialogsReducer';
import Message from './Message';

const MessageContainer = (props) => {
	let state = props.store.getState();
	let sendMessage = () => props.store.dispatch(sendMessageCreator());
	let NewMessageChange = (body) => {
		let action = updateNewMessageBodyCreator(body);
		props.store.dispatch(action);
	}

	return (
		<Message
			sendMessage={sendMessage}
			updateNewMessageBody={NewMessageChange}
			messages={state.dialogsPage.messages}
			newMessageBody={state.dialogsPage.newMessageBody}
		/>
	)
}

export default MessageContainer;