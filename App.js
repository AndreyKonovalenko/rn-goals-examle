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
  const [courseGoals, setCourseGoals] = useState([]);
  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
  };

  const removeGaolHandler = goalId => {
    setCourseGoals(currentGaols => {
      return currentGaols.filter(element => element.id != goalId);
    });
  };
  return (
    <View style={styles.screen}>
      <GoalInput pressHandler={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={element => (
          <GoalItem
            onDelete={removeGaolHandler}
            id={element.item.id}
            itemData={element.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 80
  }
});
