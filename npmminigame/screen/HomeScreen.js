import React from 'react'
import { Button, Text, View } from 'react-native'

export default function FeedScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<Button
				title="Start Game"
				onPress={() => navigation.navigate('Game')}
			/>
		</View>
	)
}
