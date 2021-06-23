import style from '../../../../styles/stylesProfilePage/PostForm.module.scss';
import * as yup from 'yup';
import { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../../redux/profileReducer';
import { createForm } from '../../../common/FormsControls/FormsControls';

const PostForm = memo(() => {
	const schema = yup.object().shape({
		newPost: yup.string()
			.min(3, 'Must be 3 characters or more')
			.max(50, 'Must be 50 characters or less')
	});
	const inputs = [
		{ nameInput: 'newPost', typeInput: 'textarea', initialValues: '' },
	];

	const disppatch = useDispatch();

	const addNewPost = useCallback((value) => {
		disppatch(addPost(value.newPost));
	}, [disppatch]);

	return (
		<div className={style.yourNews}>
			{createForm(inputs, addNewPost, schema, 'Add Post')}
		</div>
	);
});

export default PostForm;