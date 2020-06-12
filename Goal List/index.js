import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './goalItem';
import GoalInput from './goalInput';

export default function App() {

    const [arrayGoal, setArrayGoal] = useState([])
    // const saveGoal = () => { setArrayGoal([...arrayGoal, goal ]) }
    const saveGoal = currentGoal =>  {setArrayGoal ( 
        previousArrayGoal => [...previousArrayGoal, { key: Math.random().toString(), value: currentGoal }]);
        setModalScreen(false)
    }
    const deleteItem = itemDataKey => setArrayGoal( 
      previousArrayGoal => previousArrayGoal.filter( goal => goal.key !== itemDataKey ) 
    )
    // const deleteItem = itemDataKey => setArrayGoal(arrayGoal.filter( goals => itemDataKey !== goals.key))
    const [modalScreen, setModalScreen] = useState(false)

    return (
    <View style={styles.container}>
        <Button title='open modal' onPress={() => setModalScreen(true)} />
        <GoalInput saveGoal1={saveGoal} showModal={modalScreen} closeModal={setModalScreen}/>
        <FlatList 
        data={arrayGoal} 
        keyExtractor = { item => item.key }
        renderItem = { itemData => <GoalItem item={itemData.item} deleteItem={deleteItem}/> }
        style={styles.flatList} 
        showsVerticalScrollIndicator={false}
        />
        {/* {arrayGoal.map(goal => <View key={count++}><Text>{goal}</Text></View>)} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    marginTop: 50
  },
  textInput: {
      borderWidth:1
  },
  flatList: {
    width: '80%',
  }
});
