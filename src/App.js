import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

const App = (props) => {

	return (
		<div className='app-wrapper'>
			<div className='wrapper'>
				<Header />
				<Navbar store={props.store} />
				<div className='app-wrapper-content'>
					<Route path='/profile' render={() => <Profile store={props.store} />} />
					<Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
					<Route path='/news' component={News} />
					<Route path='/music' component={Music} />
					<Route path='/settings' component={Settings} />
					<Route path='/friends' render={() => <Friends />} />
				</div>
			</div>
		</div>
	)
}

export default App;
