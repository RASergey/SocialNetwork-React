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
					{Object.entries(profile.contacts).map((obj, index) => (<li key={index}><strong>{obj[0]}: </strong>{obj[1]}</li>))}
				</ul>
				<p className={style.aboutMe}>{profile.aboutMe}</p>
				<p className={style.lookingForAJob}>{profile.lookingForAJob ? 'Уже Работаю' : 'Ищу работу'}</p>
				<p className={style.lookingForAJobDescription}>{profile.lookingForAJobDescription}</p>
			</div>
		</div>
	);
});

export default ProfileInfo;