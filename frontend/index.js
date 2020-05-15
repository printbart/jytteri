/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import Navigator from './Navigator';
import {name as appName} from './app.json';
import { YellowBox } from 'react-native';
import {Provider} from 'react-redux';

import configureStore from './components/Profile/Redux/reducers/store';

const store = configureStore();

const ReduxTutorial = () => 
<Provider store = {store}>
	<Navigator />
</Provider>

YellowBox.ignoreWarnings([
	'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

AppRegistry.registerComponent(appName, () => ReduxTutorial);
