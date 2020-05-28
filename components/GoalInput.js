import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredGoal) => {
        setEnteredGoal(enteredGoal);
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
            <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGoal)} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        padding: 10,
        borderColor: 'black',
        borderWidth: 1
    },
    listItem: {
        padding: 10,
        margin: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});

export default GoalInput;