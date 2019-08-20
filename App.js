import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  FlatList
}
from 'react-native';
import GoalItem from './src/components/GoalItem';
import GoalInput from './src/components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddModel, setIsAddModel] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddModel(false);
  };

  const removeGaolHandler = goalId => {
    setCourseGoals(currentGaols => {
      return currentGaols.filter(element => element.id != goalId);
    });
  };

  const closeModelHandler = () => {
    setIsAddModel(false)
  }


  return (
    <View style={styles.screen}>
      <Button title="Add New Goal"  onPress={() => setIsAddModel(true)}/>
      <GoalInput visible={isAddModel} onAdd={addGoalHandler} onCancle={closeModelHandler} />
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
