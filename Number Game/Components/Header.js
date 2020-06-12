import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Color from '../Constant/colors';

const header = (props) => {
    return (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        backgroundColor: Color.primary,
        alignItems: 'center',
        paddingTop: 42,
        elevation: 8
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default header;