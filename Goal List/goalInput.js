import React, {useState} from 'react';
import { TextInput, StyleSheet, View, Button, Modal } from 'react-native';

export default function App(props) {
	const [goal, setGoal] = useState('');
	const saveCloseModal = () => {
		props.saveGoal1(goal);
		setGoal('')
	}
	return (
		<Modal animationType="slide" transparent={false} visible={props.showModal} onRequestClose={() => { Alert.alert("Modal has been closed.")}}> 
			<View style={styles.container}>
				<TextInput value={goal} onChangeText={(text) => setGoal(text)} placeholder='Enter notes' style={styles.textInput}/>
				<View style={styles.addBtn}>
					<Button title='add' onPress={saveCloseModal}/> 
				</View>
				{/* onPress={props.saveGoal.bind(this, goal)} */}
				<View>
					<Button title="cancel" color='red' onPress={() => props.closeModal(false)}/>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent:'center'
  },
  textInput: {
      borderWidth:1,
      width: '60%',
      padding: 5
  },
  addBtn: {
    justifyContent:'center',
    alignItems:'center',
  }
});