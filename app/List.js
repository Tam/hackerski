import React, { useState } from 'react';
import { StyleSheet, VirtualizedList, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { colours } from '../Globals';

const styles = StyleSheet.create({
	wrap: {
		paddingTop: 100,
		// backgroundColor: colours.background,
	},
	header: {
		fontSize: 30,
	},
	text: {
		color: '#000',
	},
});

const Header = ({ type }) => (
	<View>
		<Text style={[styles.text, styles.header]}>{type}</Text>
	</View>
);

const List = ({ navigation }) => {
	const { type } = navigation.state.params;
	const [refreshing, setRefreshing] = useState(false);

	return (
		<VirtualizedList
			style={styles.wrap}

			refreshing={refreshing}
			onRefresh={async () => {
				setRefreshing(true);
				await (new Promise(resolve => setTimeout(resolve, 1000)));
				setRefreshing(false);
			}}
			data={Array.from({ length: 100 }, (_, i) => ({ key: `${i}` }))}

			ListHeaderComponent={<Header type={type} />}
			renderItem={i => <Text key={i.key} style={styles.text}>{type}</Text>}

			getItem={(d, i) => d[i]}
			getItemCount={d => d.length}
		/>
	);
};

List.navigationOptions = () => ({
	header: null,
});

export default type => createStackNavigator(
	{
		List: {
			screen: List,
			params: { type },
		},
	},
	{
		defaultNavigationOptions: {
			header: null,
		},
		headerMode: 'float',
		headerTransitionPreset: 'uikit',
	}
);
