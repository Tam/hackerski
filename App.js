import React from 'react';
import { ScreenOrientation } from 'expo';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import Wrapper from './app/Wrapper';

export default function App () {
	ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

	return (
		<ActionSheetProvider>
			<Wrapper />
		</ActionSheetProvider>
	);
}
