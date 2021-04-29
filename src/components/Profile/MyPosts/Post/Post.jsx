import s from './Post.module.css';

const Post = (props) => {

	return (
		<div className={s.item}>
			<img className={s.avatar} src={props.avatar} alt="avatar" />
			<p className={s.message}>
				{props.message}
			</p>
			<div className={s.like}>
				<span>like</span> {props.likesCount}
			</div>
		</div>
	);
}

export default Post;