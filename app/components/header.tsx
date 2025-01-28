
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Button from './buttons';

const Headers = ({ titulo, press, mas }) => {

    return (

        <View style={styles.headers}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Pressable onPress={press}>
            <Text style={styles.texto}>{mas}</Text>
            </Pressable>

        </View>
    );
};

const styles = StyleSheet.create({
    headers: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
    },
    titulo: {
        fontSize: 20,
        textAlign: 'left',
        fontFamily: 'Cocogoose',
        color: 'black',
    },
    texto: {
        color: '#db314a',
        fontSize: 16,
        fontFamily: 'SatoshiBlack',
    },
});

export default Headers;
