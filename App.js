import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 80 }}>
      <View>
        <TextInput
          placeholder='Course Goal'
          style={{ borderColor: 'black', borderWidth: 1, padding: 10 }}
        />
      </View>
      <View>
        <Button title='Add' />
      </View>
    </View>
  );
}
