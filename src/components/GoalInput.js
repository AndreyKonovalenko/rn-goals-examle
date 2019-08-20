import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.input}
          value={enteredGoal}
          onChangeText={goalInputHandler}
        />
        <Button
          title='Add'
          onPress={props.onAdd.bind(this, enteredGoal)}
        />
        <Button
          title='Cancle'
          onPress={props.onCancle}
        />
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 10
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});

//flexDirecton: 'column' is default for React-Native
