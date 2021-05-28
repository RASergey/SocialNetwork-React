import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { maxLength, minLength, required } from '../../../utils/validators/validators';
import { Element } from '../../common/FormsControls/FormsContols';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const Textarea = Element('textarea');
const maxLength30 = maxLength(30);
const minLength1 = minLength(3);

const MyPosts = (props) => {
	let postElements = props.posts.map(p => <Post avatar={p.avatar} message={p.message} key={p.id} likesCount={p.likesCount} />);

	const addNewPost = (values, dispath) => {
		props.addPost(values.newPostText);
		dispath(reset('newPostForm'));
	}

	return (
		<div className={style.mypost}>
			<h2 className='title'>My post</h2>
			<AddPostReduxForm onSubmit={addNewPost} />
			<div className={style.rowPost}>
				{postElements}
			</div>
		</div>
	);
}

const AddNewPostForm = (props) => {
	return (
		<form className={style.yourNews} onSubmit={props.handleSubmit}>
			<div>
				<Field
					component={Textarea}
					name='newPostText'
					placeholder='your news_'
					validate={[required, maxLength30, minLength1]} />
			</div>
			<button>Add Post</button>
		</form>
	)
}

const AddPostReduxForm = reduxForm({ form: 'newPostForm' })(AddNewPostForm)

export default MyPosts;