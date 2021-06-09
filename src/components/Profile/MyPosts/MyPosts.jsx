import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';

const MyPosts = ({ posts, addPost }) => {

	let postElements = posts.map(p => <Post avatar={p.avatar} message={p.message} key={p.id} likesCount={p.likesCount} />);

	return (
		<div className={style.mypost}>
			<h2 className='title'>My post</h2>
			<PostForm addPost={addPost} />
			<div className={style.rowPost}>
				{postElements}
			</div>
		</div>
	)

}

export default MyPosts;