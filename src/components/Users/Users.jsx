import style from './Users.module.css'
import UserItem from './UsersItem/UsersItem'

const Users = (props) => {
	if (props.users.length === 0) {
		props.setUsers(
			[
				{
					id: 0,
					followed: false,
					avatar: 'https://cdn.vox-cdn.com/thumbor/0y8QEqAYroMOoEMU-D7C4kvBU-Y=/95x601:1280x1391/1310x873/cdn.vox-cdn.com/uploads/chorus_image/image/66699059/mgidarccontentnick.comc008fa9d_d.0.png',
					firstName: 'Dmitriy',
					lastName: 'Samuray',
					status: 'I am a boss',
					location: { city: 'Minsk', country: 'Belarus' }
				},
				{
					id: 1,
					followed: true,
					avatar: 'https://a.d-cd.net/41c4e1u-960.jpg',
					firstName: 'Sasha',
					lastName: 'Volkov',
					status: 'I am a student first',
					location: { city: 'Moscow', country: 'Russia' }
				},
				{
					id: 2,
					followed: false,
					avatar: 'https://img3.goodfon.ru/wallpaper/nbig/3/51/avatar-neytiri-zoe-saldana-6192.jpg',
					firstName: 'Andrew',
					lastName: 'Anisin',
					status: 'I am a student second',
					location: { city: 'Kiev', country: 'Ukraine' }
				},
			]
		)
	}

	let usersItem = props.users.map(u =>
		<UserItem
			id={u.id}
			followed={u.followed}
			avatar={u.avatar}
			firstName={u.firstName}
			lastName={u.lastName}
			status={u.status}
			country={u.location.country}
			city={u.location.city}
			key={u.id}
			follow={props.follow}
			unFollow={props.unFollow}
		/>
	)
	return (
		<div className={style.users}>
			<h2 className='title'>Users</h2>
			<div className={style.rowUsers}>
				{usersItem}
			</div>
			<div className={style.showMore}>
				<button>Show More</button>
			</div>
		</div>
	)
}

export default Users;