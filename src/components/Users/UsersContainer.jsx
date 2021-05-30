import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { follow, unFollow, setCurrentPage, requestUsers } from '../../redux/usersReducer';
import { getCurrentPage, getIsFetching, getIsFollowingInProgress, getlistPageNumbers, getPageSize, getTotalUsersCount, getUsers } from '../../redux/users-selectors';

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.requestUsers(this.props.currentPage, this.props.pageSize);
	}

	getlistPageNumbers = () => {
		let listPageNumbers = this.props.listPageNumbers;
		let lastUsersPage = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		return { listPageNumbers, lastUsersPage }
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.requestUsers(pageNumber, this.props.pageSize);
	}

	render() {
		return <>
			<Preloader isFetching={this.props.isFetching} />
			<Users
				getlistPageNumbers={this.getlistPageNumbers}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				unFollow={this.props.unFollow}
				follow={this.props.follow}
				isFollowingInProgress={this.props.isFollowingInProgress}
			/>
		</>
	}
}

let mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		listPageNumbers: getlistPageNumbers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		isFollowingInProgress: getIsFollowingInProgress(state)
	}
}

export default compose(
	connect(mapStateToProps, { follow, unFollow, setCurrentPage, requestUsers }),
	withAuthRedirect
)(UsersContainer)