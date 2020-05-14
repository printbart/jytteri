/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Navigator from './Navigator';
import {name as appName} from './app.json';
import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings([
	'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

AppRegistry.registerComponent(appName, () => Navigator);
