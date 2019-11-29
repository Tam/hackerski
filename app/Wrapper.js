import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { colours } from '../Globals';
import Blur from './components/Blur';
import List from './List';

const styles = StyleSheet.create({
	wrap: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		zIndex: 100,
	},
	bar: {
		backgroundColor: 'transparent',
		borderTopWidth: 0,
	},
	icon: {
		height: 22,
	},
	label: {
		fontSize: 12,
	},
});

const icons = {
	Hot: require('../assets/icons/home.png'),
	New: require('../assets/icons/home.png'),
};

const TabNavigator = createBottomTabNavigator(
	{
		Hot: List('hot'),
		New: List('new'),
	},
	{
		initialRouteName: 'Hot',
		tabBarComponent: props => (
			<View style={styles.wrap}>
				<Blur />
				<BottomTabBar {...props} style={styles.bar} />
			</View>
		),
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarOptions: {
				activeTintColor: colours.primary,
				labelStyle: [styles.label],
			},
			tabBarIcon: ({ tintColor }) => {
				const { routeName } = navigation.state;
				const icon = icons[routeName];

				return (
					<Image
						style={[styles.icon, { tintColor }]}
						source={icon}
						resizeMode="contain"
					/>
				);
			},
		}),
	}
);

const StackNavigator = createStackNavigator(
	{
		TabNavigator
	},
	{
		mode: 'modal',
		headerMode: 'none',
		transparentCard: true,
		defaultNavigationOptions: {
			gestureResponseDistance: {
				vertical: 150,
			},
		},
	},
);

export default createAppContainer(StackNavigator);
