import MyPostsContainer from './MyPosts/MyPostsContainer';
import style from './Profile.module.css';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';

const Profile = (props) => {
	return (
		<div className={style.profile}>
			<ProfileInfoContainer currentUserId={props.currentUserId} />
			<MyPostsContainer />
		</div>
	)
}
export default Profile;