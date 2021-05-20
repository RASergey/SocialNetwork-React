import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': '815e3d8d-fd83-49c4-8bc0-ab5b9ecf5850'
	}
})

export const usersAPI = {
	getUsers(currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => {
				return response.data;
			});
	},
	getProfile(userId) {
		return instance.get(`profile/${userId}`);
	},
	followDelete(userId) {
		return instance.delete(`follow/${userId}`)
			.then(response => {
				return response.data;
			});
	},
	followPost(userId) {
		return instance.post(`follow/${userId}`, {})
			.then(response => {
				return response.data;
			});
	}
}

export const authAPI = {
	me() {
		return instance.get(`auth/me`)
			.then(response => {
				return response.data;
			});
	}
}