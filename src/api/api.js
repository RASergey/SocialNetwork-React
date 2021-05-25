import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': '815e3d8d-fd83-49c4-8bc0-ab5b9ecf5850'
	}
})

function checkResultCode(response) {
	return new Promise((resolve, reject) => {
		let resultCode = response.data.resultCode;
		if (resultCode === 0) {
			resolve(response.data);
		} else {
			reject(new Error(`Код запроса: ${resultCode}`));
		}
	})
}

export const usersAPI = {
	getUsers(currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data);
	}
}

export const followAPI = {
	followDelete(userId) {
		return instance.delete(`follow/${userId}`)
			.then(response => checkResultCode(response));
	},
	followPost(userId) {
		return instance.post(`follow/${userId}`, {})
			.then(response => checkResultCode(response));
	}
}

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`);
	},
	getStatus(userId) {
		return instance.get(`profile/status/${userId}`);
	},
	updateStatus(status) {
		return instance.put(`profile/status/`, { status })
			.then(response => checkResultCode(response));
	},
}

export const authAPI = {
	signIn(email, password, rememberMe) {
		return instance.post(`auth/login`, { email, password, rememberMe })
			.then(response => checkResultCode(response));
	},
	logOut() {
		return instance.post(`auth/logout`, {})
			.then(response => checkResultCode(response));
	},
	me() {
		return instance.get(`auth/me`)
			.then(response => checkResultCode(response));
	},
}