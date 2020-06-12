import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App(props) {
  	return (

			<TouchableOpacity onPress={props.deleteItem.bind(this, props.item.key)}>
				<View style={styles.container}>
					<Text>{props.item.value}</Text>
				</View> 
			</TouchableOpacity>

	);
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'grey'

  },
});