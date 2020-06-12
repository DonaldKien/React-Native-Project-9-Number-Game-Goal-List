import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props => { return <TextInput {...props} style={{...styles.textInput, ...props.style1}}/> }

const styles = StyleSheet.create ({
    textInput: {
        height: 30,
        borderBottomWidth: 1,
        marginVertical: 15,
        borderBottomColor:'grey'
    }
})

export default Input;