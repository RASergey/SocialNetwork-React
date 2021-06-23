import style from '../../../styles/stylesProfilePage/ProfileInfo.module.scss';
import Preloader from '../../common/Preloader/Preloader';
import profilePhoto from '../../../assets/images/avatar.png';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import { getUserId } from '../../../redux/autch-selectors';
import { getProfile, getStatus } from '../../../redux/profile-selectors';
import { getIsFetching } from '../../../redux/users-selectors';
import { memo } from 'react';
import { useSelector } from 'react-redux';

const ProfileInfo = memo(({ currentUserId }) => {

	const profile = useSelector(getProfile);
	const status = useSelector(getStatus);
	const authorizedUserId = useSelector(getUserId);
	const isFetching = useSelector(getIsFetching);

	if (!profile) {
		return (
			<div>
				<Preloader />
			</div>
		)
	};

	return (
		<div className={style.rowprofile}>
			{isFetching ? <Preloader /> : null}
			<img className={style.avatar} src={profile.photos.small != null ? profile.photos.small : profilePhoto} alt='/' />
			<div className={style.listUserInfo}>
				<div className={style.rowNameStatus}>
					<p className={style.fullName}>{profile.fullName}</p>
					<ProfileStatus
						status={status}
						authorizedUserId={authorizedUserId}
						currentUserId={currentUserId} />
				</div>
				<ul className={style.contacts}>
					<li><strong>facebook:</strong> {profile.contacts.facebook}</li>
					<li><strong>website:</strong> {profile.contacts.website}</li>
					<li><strong>vk:</strong> {profile.contacts.vk}</li>
					<li><strong>twitter:</strong> {profile.contacts.twitter}</li>
					<li><strong>instagram:</strong> {profile.contacts.instagram}</li>
					<li><strong>github:</strong> {profile.contacts.github}</li>
					<li><strong>mainLink:</strong> {profile.contacts.mainLink}</li>
					<li><strong>youtube:</strong> {profile.contacts.youtube}</li>
				</ul>
				<p className={style.aboutMe}>{profile.aboutMe}</p>
				<p className={style.lookingForAJob}>{profile.lookingForAJob ? 'Уже Работаю' : 'Ищу работу'}</p>
				<p className={style.lookingForAJobDescription}>{profile.lookingForAJobDescription}</p>
			</div>
		</div>
	);
});

export default ProfileInfo;