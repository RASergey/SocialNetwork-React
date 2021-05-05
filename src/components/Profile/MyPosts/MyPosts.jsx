import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	let postElements = props.posts.map(p => <Post avatar={p.avatar} message={p.message} key={p.id} likesCount={p.likesCount} />);
	let onAddPost = () => props.addPost();
	let onPostChange = (e) => { props.updateNewPostText(e.target.value) }

	return (
		<div className={style.mypost}>
			<h2 className='title'>My post</h2>
			<div className={style.yourNews}>
				<textarea onChange={onPostChange} value={props.newPostText} placeholder='your news_' />
				<button onClick={onAddPost}>Add Post</button>
				<button>Remove</button>
			</div>
			<div className={style.rowPost}>
				{postElements}
			</div>
		</div>
	);
}

export default MyPosts;