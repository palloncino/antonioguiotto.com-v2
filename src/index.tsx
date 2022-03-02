import {ThemeProvider} from '@fluentui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import Application from './app';
import config from './app.config.json';
import reportWebVitals from './reportWebVitals';
import {store} from './state';
import {goldenTheme} from './theme';
import './css/index.css';
import {initializeIcons} from '@fluentui/react/lib/Icons';
initializeIcons();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<ThemeProvider applyTo="body" theme={goldenTheme}>
					<Application theme={goldenTheme} appConfig={config} />
				</ThemeProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);

reportWebVitals();
