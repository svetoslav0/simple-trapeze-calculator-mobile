import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

    const [biggerSide, setBiggerSide] = useState(0);
    const [smallerSide, setSmallerSide] = useState(0);
    const [middleSide, setMiddleSide] = useState(0);

    const [sharpAngle, setSharpAngle] = useState(0);
    const [obtuseAngle, setObtuseAngle] = useState(0);
    const [inclinedSide, setInclinedSide] = useState(0);

    const biggerSideInputHandler = (enteredText) => {
        setBiggerSide(enteredText);
    }

    const smallerSideInputHandler = (enteredText) => {
        setSmallerSide(enteredText);
    }

    const middleSideInputHandler = (enteredText) => {
        setMiddleSide(enteredText);
    }

    const calculate = () => {
        const remaining = Math.abs(biggerSide - smallerSide);
        const topSide = Math.sqrt(remaining ** 2 + middleSide ** 2);

        const sinValue = middleSide / topSide;
        const mainDegrees = Math.asin(sinValue) * 180 / Math.PI;
        const secondaryDegrees = 180 - mainDegrees;

        const mainDegreeToShow = (Math.round(mainDegrees * 100) / 100).toFixed(2);
        const secondaryDegreeToShow = (Math.round(secondaryDegrees * 100) / 100).toFixed(2);
        const topSideToSide = (Math.round(topSide * 100) / 100).toFixed(2);

        setSharpAngle(+mainDegreeToShow);
        setObtuseAngle(+secondaryDegreeToShow);
        setInclinedSide(+topSideToSide);
    }

    return (
        <View style={styles.container}>
            <Text>Голяма страна:</Text>
            <TextInput style={styles.input} onChangeText={biggerSideInputHandler} />

            <Text>Малка страна:</Text>
            <TextInput style={styles.input} onChangeText={smallerSideInputHandler} />

            <Text>Средна страна:</Text>
            <TextInput style={styles.input} onChangeText={middleSideInputHandler} />

            <Button title="Мастика!" onPress={calculate} />

            <Text>Остър ъгъл: {sharpAngle}&deg;</Text>
            <Text>Аптал ъгъл: {obtuseAngle}&deg;</Text>
            <Text>Байр страна: {inclinedSide ?? ""}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '50%',
        borderBottomColor: 'black',
        // borderBottomWidth: 1,
        borderWidth: 1,
        margin: 5,
        padding: 10
    }
});
