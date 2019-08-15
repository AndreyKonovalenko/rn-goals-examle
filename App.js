import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputConteiner}>
        <TextInput placeholder='Course Goal' style={styles.input} />
        <Button title='Add' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 80
  },
  inputConteiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%'
  }
});
