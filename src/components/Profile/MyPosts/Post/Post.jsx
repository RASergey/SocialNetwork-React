import style from '../../../../styles/stylesProfilePage/Post.module.scss';
import { memo } from 'react';

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