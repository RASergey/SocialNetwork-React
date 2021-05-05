import style from './UsersItem.module.css'

const UserItem = (props) => {
	return (
		<div className={style.itemUserWrapper}>
			<div className={style.itemUser}>
				<div className={style.userAvatar}>
					<img src='https://cdn.vox-cdn.com/thumbor/0y8QEqAYroMOoEMU-D7C4kvBU-Y=/95x601:1280x1391/1310x873/cdn.vox-cdn.com/uploads/chorus_image/image/66699059/mgidarccontentnick.comc008fa9d_d.0.png' alt="avatar" />
				</div>
				<div className={style.textUser}>
					<name>
						First Name
						Last Name
							</name>
					<address>
						Belarus,
						Minsk
							</address>
					<span>
						Status
							</span>
				</div>
			</div>
			<button className={style.IsFollow}>Follow</button>
		</div>
	)
}

export default UserItem;