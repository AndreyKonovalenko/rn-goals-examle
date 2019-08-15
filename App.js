import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 80 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <TextInput
          placeholder='Course Goal'
          style={{
            borderColor: 'black',
            borderWidth: 1,
            padding: 10,
            width: '80%'
          }}
        />
        <Button title='Add' />
      </View>
    </View>
  );
}
