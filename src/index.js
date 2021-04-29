import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/state'

let renderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App state={state} dispatch={store.dispatch.bind(store)} />
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	)
}
renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

// renderEntireTree(state);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
