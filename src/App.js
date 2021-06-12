import './App.scss';
import React from 'react';
import Dialogs from './components/Dialogs/Dialogs';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import NavBar from './components/Navbar/Navbar';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersPage from './components/Users/UsersPage';
import Preloader from './components/common/Preloader/Preloader';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getInitialized } from './redux/app-selectors';
import { initializedApp } from './redux/appReducer';
import { getIsAuth } from './redux/autch-selectors';

class App extends React.Component {

	componentDidMount() {
		this.props.initializedApp();
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader isFetching='true' />
		};

		return (
			<div className='wrapper'>
				<Header />
				<div className='container'>
					<div className={`navBar ${!this.props.isAuth ? 'navBarNone' : ''}`}>
						<NavBar />
					</div>
					<div className='content'>
						<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
						<Route path='/dialogs' render={() => <Dialogs />} />
						<Route path='/users' render={() => <UsersPage />} />
						<Route path='/news' component={News} />
						<Route path='/music' component={Music} />
						<Route path='/settings' component={Settings} />
						<Route path='/friends' render={() => <Friends />} />
						<Route path='/login' component={Login} />
					</div>
				</div>
			</div>
		);
	};
};

const mapStateToProps = (state) => ({
	initialized: getInitialized(state),
	isAuth: getIsAuth(state)
});

export default compose(
	withRouter,
	connect(mapStateToProps, { initializedApp })
)(App);
