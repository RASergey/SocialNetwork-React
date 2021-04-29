const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';


const dialogsReducer = (state, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let newMessage = {
				id: state.messages.outboundMessages.length,
				avatar: 'https://cdn.fishki.net/upload/post/2018/05/04/2588849/7620afabdb00b651da45d24a6bf29de3.jpg',
				message: state.newMessageBody,
			}
			state.newMessageBody = '';
			state.messages.outboundMessages.push(newMessage);
			return state;
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body;
			return state;
		default:
			return state;
	}
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });


export default dialogsReducer;