import axios from "axios"

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
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
	}
}

export const authAPI = {
	auth() {
		return instance.get(`auth/me`)
			.then(response => {
				return response.data;
			});
	}
}

export const followAPI = {
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