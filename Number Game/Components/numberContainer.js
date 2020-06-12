import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Color from '../Constant/colors';

const NumberContainer = props => {
    return (
        <View style={styles.NumberContainer}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    NumberContainer: {
        borderWidth: 2,
        borderColor: Color.accent,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems:'center',
        justifyContent:'center'
    },
    number: {
      color: Color.accent,
      fontSize: 22  
    }
})

export default NumberContainer;