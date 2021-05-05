import MyPostsContainer from './MyPosts/MyPostsContainer';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
	return (
		<div className={style.profile}>
			<ProfileInfo />
			<MyPostsContainer />
		</div>
	)
}
export default Profile;