import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ currentUserId }) => {

	return (
		<div className={style.profile}>
			<ProfileInfo currentUserId={currentUserId} />
			<MyPosts />
		</div>
	);
};
export default Profile;