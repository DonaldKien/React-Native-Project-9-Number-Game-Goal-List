import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../Components/Card';
import Color from '../Constant/colors';
import Input from '../Components/Input';
import NumberContainer from '../Components/numberContainer';

const StartGameScreen = props => {

    const [numInput, setNumInput] = useState('');
    const [confirm, setConfirm] = useState(false);
    const [selectedNum, setSelectedNum] = useState()

    const numberOnly = (text) => { return setNumInput (text.replace(/[^0-9]/g, '')) };

    const resetHandler = () => {
        setConfirm(false);
        setNumInput('')
    }

    const confirmHandler = () => { 
        let chooseNumber = parseInt(numInput);
        if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99 ) {
            return Alert.alert(
                'Invalid number', 
                'Number has to be between 1 and 99.', 
                [{text:'Okay', style:'destructive', onPress:resetHandler}]
            )
        }
        setConfirm(true);
        setNumInput('');
        setSelectedNum(chooseNumber);
        Keyboard.dismiss();
    }

    let confirmedOutput;
    if (confirm) { confirmedOutput = (
        <Card style1={styles.summaryContainer}>
            <Text>Number Selected:</Text>
            <NumberContainer>{selectedNum}</NumberContainer>
            <Button title='start game' onPress={() => props.onStartGame(selectedNum)}/>
        </Card>
    )}

    return (
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
        <View style={styles.container}>
            <Text style={styles.title}>Start a New Game!</Text>

            <Card style1={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input style1={styles.input} onChangeText={numberOnly} value={numInput} autoCorrect={false} keyboardType='number-pad' maxLength={2} onBlurSubmit autoCapitalize='none'/>

                <View style={styles.buttonContainer}>
                    <View style={styles.btnAccent}><Button onPress={resetHandler} color={Color.accent} title="reset"/></View>
                    <View style={styles.btnPrimary}><Button onPress={confirmHandler} color={Color.primary} title="confirm"/></View>
                </View>

            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        backgroundColor : "#0000"
    },
    title: {
        fontSize: 20,
        marginVertical: 20
    },
    buttonContainer: {
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal: 15
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems:'center',
        paddingVertical: 20,
    },
    input: {
        width: 30,
        textAlign:'center'
    },
    btnAccent: {
        width:100
    },
    btnPrimary: {
        width: 100
    },
    summaryContainer: {
        marginTop: 40,
        alignItems:'center',
        padding:20,
        justifyContent:'center'
    }
});

export default StartGameScreen;