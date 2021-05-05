import style from './Post.module.css';

const Post = (props) => {

	return (
		<div className={style.item}>
			<img className={style.avatar} src={props.avatar} alt="avatar" />
			<p className={style.message}>
				{props.message}
			</p>
			<div className={style.like}>
				<span>like</span> {props.likesCount}
			</div>
		</div>
	);
}

export default Post;