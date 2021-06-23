import style from '../../../styles/stylesUsersPage/UsersSearchForm.module.scss';
import * as yup from 'yup';
import { memo, useCallback } from 'react';
import { createForm } from '../../common/FormsControls/FormsControls';

const UsersSearchForm = memo(({ onFilterChanged }) => {
	const schema = yup.object().shape({
		term: yup.string()
			.min(3, 'Must be 3 characters or more')
			.max(20, 'Must be 20 characters or less'),
	});
	const inputs = [
		{ nameInput: 'term', typeInput: 'input', initialValues: '' },
	];

	const onFilterUsersChanged = useCallback((value) => {
		onFilterChanged(value);
	}, [onFilterChanged]);

	return (
		<div className={style.usersSearchForm}>
			{createForm(inputs, onFilterUsersChanged, schema, 'Find')}
		</div>
	);
});

export default UsersSearchForm;