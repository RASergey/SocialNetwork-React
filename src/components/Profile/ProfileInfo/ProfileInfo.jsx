import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
		<div>
			<div className={s.rowprofile}>
				<img className={s.avatar} src='https://cdn.fishki.net/upload/post/2018/05/04/2588849/7620afabdb00b651da45d24a6bf29de3.jpg' alt='/' />
			</div>
		</div>
	)
}

export default ProfileInfo;