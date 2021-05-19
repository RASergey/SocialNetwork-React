import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
	if (!props.profile) {
		return (
			<div>
				<Preloader isFetching='true' />
			</div>
		)
	}
	return (
		<div className={style.rowprofile}>
			<img className={style.avatar} src={props.profile.photos.small} alt='/' />
			<div className={style.listUserInfo}>
				<p className={style.fullName}>{props.profile.fullName}</p>
				<ul className={style.contacts}>
					<li><strong>facebook:</strong> {props.profile.contacts.facebook}</li>
					<li><strong>website:</strong> {props.profile.contacts.website}</li>
					<li><strong>vk:</strong> {props.profile.contacts.vk}</li>
					<li><strong>twitter:</strong> {props.profile.contacts.twitter}</li>
					<li><strong>instagram:</strong> {props.profile.contacts.instagram}</li>
					<li><strong>github:</strong> {props.profile.contacts.github}</li>
					<li><strong>mainLink:</strong> {props.profile.contacts.mainLink}</li>
					<li><strong>youtube:</strong> {props.profile.contacts.youtube}</li>
				</ul>
				<p className={style.aboutMe}>{props.profile.aboutMe}</p>
				<p className={style.lookingForAJob}>{props.profile.lookingForAJob ? 'Уже Работаю' : 'Ищу работу'}</p>
				<p className={style.lookingForAJobDescription}>{props.profile.lookingForAJobDescription}</p>
			</div>
		</div>
	)

}

export default ProfileInfo;