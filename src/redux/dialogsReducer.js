const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
	dialogs: [
		{ id: 0, avatar: 'https://cdn.vox-cdn.com/thumbor/0y8QEqAYroMOoEMU-D7C4kvBU-Y=/95x601:1280x1391/1310x873/cdn.vox-cdn.com/uploads/chorus_image/image/66699059/mgidarccontentnick.comc008fa9d_d.0.png', name: 'Dimych Samuray' },
		{ id: 1, avatar: 'https://img3.goodfon.ru/wallpaper/nbig/3/51/avatar-neytiri-zoe-saldana-6192.jpg', name: 'Andrey Anisin' },
		{ id: 2, avatar: 'https://w-dog.ru/wallpapers/16/18/337785071538579/avatara-glaz-sinij-avatar.jpg', name: 'Sveta Petrova' },
		{ id: 3, avatar: 'https://a.d-cd.net/41c4e1u-960.jpg', name: 'Sasha Volkov' },
		{ id: 4, avatar: 'https://i09.fotocdn.net/s122/c8aca65ce0efc401/user_l/2780959785.jpg', name: 'Viktor Suxorukov' },
		{ id: 5, avatar: 'https://vraki.net/sites/default/files/inline/images/10_342.jpg', name: 'Valera Brejnevs' }
	],
	messages: {
		incomingMessages: [
			{ id: 0, avatar: 'https://i09.fotocdn.net/s122/c8aca65ce0efc401/user_l/2780959785.jpg', message: 'Hi' },
			{ id: 1, avatar: 'https://i09.fotocdn.net/s122/c8aca65ce0efc401/user_l/2780959785.jpg', message: 'How are you' },
			{ id: 2, avatar: 'https://i09.fotocdn.net/s122/c8aca65ce0efc401/user_l/2780959785.jpg', message: 'Yo' },
			{ id: 3, avatar: 'https://i09.fotocdn.net/s122/c8aca65ce0efc401/user_l/2780959785.jpg', message: 'Hello' },
			{ id: 4, avatar: 'https://i09.fotocdn.net/s122/c8aca65ce0efc401/user_l/2780959785.jpg', message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita reiciendis et cumque dolor consequatur facere doloremque, placeat eaque autem debitis laboriosam. Explicabo quia alias ipsum ad consequuntur eius, exercitationem assumenda.' },
			{ id: 5, avatar: 'https://i09.fotocdn.net/s122/c8aca65ce0efc401/user_l/2780959785.jpg', message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita reiciendis et cumque dolor consequatur facere doloremque, placeat eaque autem debitis laboriosam. Explicabo quia alias ipsum ad consequuntur eius, exercitationem assumenda.' },
			{ id: 6, avatar: 'https://i09.fotocdn.net/s122/c8aca65ce0efc401/user_l/2780959785.jpg', message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita reiciendis et cumque dolor consequatur facere doloremque, placeat eaque autem debitis laboriosam. Explicabo quia alias ipsum ad consequuntur eius, exercitationem assumenda.' },
			{ id: 7, avatar: 'https://i09.fotocdn.net/s122/c8aca65ce0efc401/user_l/2780959785.jpg', message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita reiciendis et cumque dolor consequatur facere doloremque, placeat eaque autem debitis laboriosam. Explicabo quia alias ipsum ad consequuntur eius, exercitationem assumenda.' },
			{ id: 8, avatar: 'https://i09.fotocdn.net/s122/c8aca65ce0efc401/user_l/2780959785.jpg', message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita reiciendis et cumque dolor consequatur facere doloremque, placeat eaque autem debitis laboriosam. Explicabo quia alias ipsum ad consequuntur eius, exercitationem assumenda.' },
			{ id: 9, avatar: 'https://i09.fotocdn.net/s122/c8aca65ce0efc401/user_l/2780959785.jpg', message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita reiciendis et cumque dolor consequatur facere doloremque, placeat eaque autem debitis laboriosam. Explicabo quia alias ipsum ad consequuntur eius, exercitationem assumenda.' }
		],
		outboundMessages: [
			{ id: 0, avatar: 'https://cdn.fishki.net/upload/post/2018/05/04/2588849/7620afabdb00b651da45d24a6bf29de3.jpg', message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita reiciendis et cumque dolor consequatur facere doloremque, placeat eaque autem debitis laboriosam. Explicabo quia alias ipsum ad consequuntur eius, exercitationem assumenda.' },
			{ id: 1, avatar: 'https://cdn.fishki.net/upload/post/2018/05/04/2588849/7620afabdb00b651da45d24a6bf29de3.jpg', message: 'How are you' },
			{ id: 2, avatar: 'https://cdn.fishki.net/upload/post/2018/05/04/2588849/7620afabdb00b651da45d24a6bf29de3.jpg', message: 'Yo' },
			{ id: 3, avatar: 'https://cdn.fishki.net/upload/post/2018/05/04/2588849/7620afabdb00b651da45d24a6bf29de3.jpg', message: 'Hello' },
			{ id: 4, avatar: 'https://cdn.fishki.net/upload/post/2018/05/04/2588849/7620afabdb00b651da45d24a6bf29de3.jpg', message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita reiciendis et cumque dolor consequatur facere doloremque, placeat eaque autem debitis laboriosam. Explicabo quia alias ipsum ad consequuntur eius, exercitationem assumenda.' },
			{ id: 5, avatar: 'https://cdn.fishki.net/upload/post/2018/05/04/2588849/7620afabdb00b651da45d24a6bf29de3.jpg', message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita reiciendis et cumque dolor consequatur facere doloremque, placeat eaque autem debitis laboriosam. Explicabo quia alias ipsum ad consequuntur eius, exercitationem assumenda.' }
		]
	},
	newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
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