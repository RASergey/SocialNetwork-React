import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Preloader from './components/common/Preloader/Preloader';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Friends from './components/Friends/Friends';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import NavBarContainer from './components/Navbar/NavbarContainer';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { initializedApp } from './redux/appReducer';

class App extends React.Component {

	componentDidMount() {
		this.props.initializedApp();
	}

	render() {

		if (!this.props.initialized) {
			return <Preloader isFetching='true' />
		}

		return (
			<div className='wrapper'>
				<HeaderContainer />
				<div className='container'>
					<div className={`navBar ${!this.props.isAuth ? 'navBarNone' : ''}`}>
						<NavBarContainer />
					</div>
					<div className='content'>
						<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
						<Route path='/dialogs' render={() => <DialogsContainer />} />
						<Route path='/users' render={() => <UsersContainer />} />
						<Route path='/news' component={News} />
						<Route path='/music' component={Music} />
						<Route path='/settings' component={Settings} />
						<Route path='/friends' render={() => <Friends />} />
						<Route path='/login' component={Login} />
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized,
	isAuth: state.auth.isAuth
})

export default compose(
	withRouter,
	connect(mapStateToProps, { initializedApp })
)(App)
