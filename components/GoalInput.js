import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredGoal) => {
        setEnteredGoal(enteredGoal);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Add Item" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
                <View style={styles.buttonContainer} >
                    <View style={styles.button} >
                        <Button title="Add" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button} >
                        <Button title="Cancel" color="red" onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10
    },
    listItem: {
        padding: 10,
        margin: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    button: {
        width: '40%'
    }
});

export default GoalInput;