import { memo } from 'react';
import style from './Post.module.scss';

const Post = memo(({ avatar, message, likesCount }) => {

	return (
		<div className={style.item}>
			<img className={style.avatar} src={avatar} alt="avatar" />
			<p className={style.message}>
				{message}
			</p>
			<div className={style.like}>
				<span>like</span> {likesCount}
			</div>
		</div>
	);
});

export default Post;