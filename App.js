import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList} from 'react-native';
import {useState} from "react";
import {GoalItem} from "./components/GoalItem";

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState("")
  const[courseGoals, setCourseGoals] = useState([])


  const goalInputHandler = (enteredText) =>{
    setEnteredGoalText(enteredText)
  }




  const addGoalHandler = () => {
    //the best way to do this, to make if your usestate depends on previous state a better way is to parse a function
    //this funcition will get the extixing state, that is why we use a arrowfunction.
    //Den her opdatere vores state og er den bedstre måde da vi bruger arrowfunction
    setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals,
      {text: enteredGoalText, key: Math.random().toString()},
        //hver item er et objekt med et tekst property
    ]);
  }

  return (
      <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="your course goal"
                     onChangeText={goalInputHandler}
          />

          <Button title="add course" onPress={addGoalHandler}/>
        </View>
        <View style={styles.goalsContainer}>
        <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text}/>;
        }}





            alwaysBounceVertical={false}>

        </FlatList>
        </View>
      </View>
      //map tager i mod en arrow function
  );
}

const styles = StyleSheet.create({
appContainer: {
  flex: 1,
  paddingTop: 50,
  paddingHorizontal: 16
},
  inputContainer: {
  flex: 1,
  flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput:{
  borderWidth:1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
  flex: 5
  },


});
