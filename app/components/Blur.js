import React from 'react';
import { BlurView } from 'expo-blur';
import { styles } from '../../Globals';

export default () => (
	<BlurView style={styles.fill} intensity={100} tint="dark" />
);
