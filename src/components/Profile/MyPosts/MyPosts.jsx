import style from '../../../styles/stylesProfilePage/MyPosts.module.scss';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';
import { useMemo } from 'react';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getPosts } from '../../../redux/profile-selectors';

const MyPosts = memo(() => {

	const posts = useSelector(getPosts);

	const postElements = useMemo(() => {
		return posts.map(p => <Post avatar={p.avatar} message={p.message} key={p.id} likesCount={p.likesCount} />);
	}, [posts]);

	return (
		<div className={style.mypost}>
			<h2 className='title'>My post</h2>
			<PostForm />
			<div className={style.rowPost}>
				{postElements}
			</div>
		</div>
	);
});

export default MyPosts;