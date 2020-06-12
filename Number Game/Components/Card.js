import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = props => {
    return (
        <View style={{...styles.Card, ...props.style1}}>{props.children}</View>
    )
}

const styles = StyleSheet.create({
    Card: {
        backgroundColor:'white',
        shadowColor: 'black',
        shadowOffset: {width:0, height:2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        paddingVertical: 20
    },
});

export default Card;