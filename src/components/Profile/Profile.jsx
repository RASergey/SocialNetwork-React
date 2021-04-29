import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<div className={s.profile}>
			<ProfileInfo />
			<MyPosts
				posts={props.state.posts}
				newPostText={props.state.newText}
				dispatch={props.dispatch}
			/>
		</div>
	)
}
export default Profile;