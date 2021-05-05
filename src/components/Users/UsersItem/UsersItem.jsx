import style from './UsersItem.module.css'

const UserItem = (props) => {
	return (
		<div className={style.itemUserWrapper}>
			<div className={style.itemUser}>
				<div className={style.userAvatar}>
					<img src={props.avatar} alt="avatar" />
				</div>
				<div className={style.textUser}>
					<p>
						{props.firstName} {props.lastName}
					</p>
					<address>
						{props.city}, {props.country}
					</address>
					<span>
						{props.status}
					</span>
				</div>
			</div>
			{
				props.followed ?
					<button onClick={() => { props.unFollow(props.id) }}>UnFollow</button> :
					<button onClick={() => { props.follow(props.id) }}>Follow</button>
			}
		</div>
	)
}

export default UserItem;