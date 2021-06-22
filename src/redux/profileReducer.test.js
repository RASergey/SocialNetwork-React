import profileReducer, { addPost, deletePost } from "./profileReducer";

let state = {
	posts: [
		{ id: 0, avatar: 'https://i.ytimg.com/vi/rapOSviNLkw/maxresdefault.jpg', message: 'Hi, how are you?', likesCount: 142 },
		{ id: 1, avatar: 'https://i.ytimg.com/vi/rapOSviNLkw/maxresdefault.jpg', message: 'bla bla', likesCount: 1266 },
		{ id: 2, avatar: 'https://i.ytimg.com/vi/rapOSviNLkw/maxresdefault.jpg', message: 'da da', likesCount: 1299 },
		{ id: 3, avatar: 'https://i.ytimg.com/vi/rapOSviNLkw/maxresdefault.jpg', message: 'YRYR sae', likesCount: 12 },
		{ id: 4, avatar: 'https://i.ytimg.com/vi/rapOSviNLkw/maxresdefault.jpg', message: 'It\'s my first post', likesCount: 123 }
	],
	profile: null,
	status: ''
}

test('length of posts should be incremented', () => {
	let action = addPost('it-kamasutra.com')
	let newState = profileReducer(state, action);

	expect(newState.posts.length).toBe(6);
});

test('message of new post should be it-kamasutra.com', () => {
	let action = addPost('it-kamasutra.com')
	let newState = profileReducer(state, action);

	expect(newState.posts[5].message).toBe('it-kamasutra.com');
});

test('after deleting of messages should be decrement', () => {
	let action = deletePost(1)
	let newState = profileReducer(state, action);

	expect(newState.posts.length).toBe(4);
});

test('after deleting length should\'t be decrement if id is incorrect', () => {
	let action = deletePost(1000)
	let newState = profileReducer(state, action);

	expect(newState.posts.length).toBe(5);
});

