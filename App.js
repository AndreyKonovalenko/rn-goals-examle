import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  ScrollView,
  FlatList
} from 'react-native';
import GoalItem from './src/components/GoalItem';
import GoalInput from './src/components/GoalInput';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoal }
    ]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput
        inputData={enteredGoal}
        inputHandler={goalInputHandler}
        pressHandler={addGoalHandler}
      />
      <FlatList
        data={courseGoals}
        renderItem={element => <GoalItem itemData={element.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 80
  }
});
