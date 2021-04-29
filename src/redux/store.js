import dialogsReduser from "./dialogsReducer";
import profileReduser from "./profileReducer";
import sideBarReduser from "./sideBarReducer";

let store = {
	_state: {
		profilePage: {
			newText: '',
			posts: [
				{ id: 0, avatar: 'https://i.ytimg.com/vi/rapOSviNLkw/maxresdefault.jpg', message: 'Hi, how are you?', likesCount: 142 },
				{ id: 1, avatar: 'https://i.ytimg.com/vi/rapOSviNLkw/maxresdefault.jpg', message: 'bla bla', likesCount: 1266 },
				{ id: 2, avatar: 'https://i.ytimg.com/vi/rapOSviNLkw/maxresdefault.jpg', message: 'da da', likesCount: 1299 },
				{ id: 3, avatar: 'https://i.ytimg.com/vi/rapOSviNLkw/maxresdefault.jpg', message: 'YRYR sae', likesCount: 12 },
				{ id: 4, avatar: 'https://i.ytimg.com/vi/rapOSviNLkw/maxresdefault.jpg', message: 'It\'s my first post', likesCount: 123 }
			],
		},
		dialogsPage: {
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
		},
		siteBar: {
			friends: [
				{ id: 0, avatar: 'https://cdn.vox-cdn.com/thumbor/0y8QEqAYroMOoEMU-D7C4kvBU-Y=/95x601:1280x1391/1310x873/cdn.vox-cdn.com/uploads/chorus_image/image/66699059/mgidarccontentnick.comc008fa9d_d.0.png', name: 'Dimych Samuray' },
				{ id: 1, avatar: 'https://img3.goodfon.ru/wallpaper/nbig/3/51/avatar-neytiri-zoe-saldana-6192.jpg', name: 'Andrey Anisin' },
				{ id: 2, avatar: 'https://w-dog.ru/wallpapers/16/18/337785071538579/avatara-glaz-sinij-avatar.jpg', name: 'Sveta Petrova' },
				{ id: 3, avatar: 'https://a.d-cd.net/41c4e1u-960.jpg', name: 'Sasha Volkov' },
				{ id: 4, avatar: 'https://i09.fotocdn.net/s122/c8aca65ce0efc401/user_l/2780959785.jpg', name: 'Viktor Suxorukov' },
				{ id: 5, avatar: 'https://vraki.net/sites/default/files/inline/images/10_342.jpg', name: 'Valera Brejnevs' }
			]
		}
	},

	_callSubscriber() {
		console.log('State changed');
	},

	getState() {
		return this._state;
	},

	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		profileReduser(this._state.profilePage, action);
		dialogsReduser(this._state.dialogsPage, action);
		sideBarReduser(this._state.siteBar, action);
		this._callSubscriber(this._state);
	}
}

export default store;
window.store = store;