import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { GameTest } from 'minigame-001001';

export default function GameScreen({ navigation }) {
	// const [isGameRunning, setIsGameRunning] = React.useState(true);
	// const [timer, setTimer] = React.useState(0);

	// React.useEffect(() => {
	//   if (isGameRunning) {
	//     const interval = setInterval(() => {
	//       setTimer(prev => prev + 1);
	//     }, 1000);

	//     return () => clearInterval(interval);
	//   }
	// }, [isGameRunning]);

	return (
		<View style={styles.container}>
			{/* <Text>Timer: {timer}</Text> */}
			{/* <Button title={isGameRunning ? "Pause" : "Resume"} onPress={() => setIsGameRunning(!isGameRunning)} /> */}
			<GameTest
				user={{ name: 'Amy', otherInfo: 'othersInfo' }}
				onEndGame={data => {
					console.log(data);
					navigation.goBack();
				}}
			/>

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#DDDDDD',
	},
});