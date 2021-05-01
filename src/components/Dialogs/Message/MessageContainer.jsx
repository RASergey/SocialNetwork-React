import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../redux/dialogsReducer';
import StoreContext from '../../../StoreContext';
import Message from './Message';

const MessageContainer = () => {
	return (
		<StoreContext.Consumer>
			{ (store) => {
				let state = store.getState();
				let sendMessage = () => store.dispatch(sendMessageCreator());
				let NewMessageChange = (body) => {
					let action = updateNewMessageBodyCreator(body);
					store.dispatch(action);
				}

				return (
					<Message
						sendMessage={sendMessage}
						updateNewMessageBody={NewMessageChange}
						messages={state.dialogsPage.messages}
						newMessageBody={state.dialogsPage.newMessageBody}
					/>
				)
			}}
		</StoreContext.Consumer>
	)
}

export default MessageContainer;