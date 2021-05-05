import style from './Users.module.css'
import UserItem from './UsersItem/UsersItem'

const Users = () => {
	return (
		<div className={style.users}>
			<h2 className='title'>Users</h2>
			<div className={style.rowUsers}>
				<UserItem />
			</div>
			<div className={style.showMore}>
				<button>Show More</button>
			</div>
		</div>
	)
}

export default Users;