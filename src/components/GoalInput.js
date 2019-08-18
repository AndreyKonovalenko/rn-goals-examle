import React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const GoalInput = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Course Goal'
        style={styles.input}
        onChangeText={props.inputHandler}
        value={props.inputData}
      />
      <Button title='Add' onPress={props.pressHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
