import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { getIsFetching } from '../../redux/users-selectors';

const UsersPage = memo(() => {

	const isFetching = useSelector(getIsFetching);

	return <>
		{isFetching ? <Preloader /> : null}
		<Users />
	</>
});

export default UsersPage;

