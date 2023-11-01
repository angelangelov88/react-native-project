import React from 'react';
import { Button, FlatList, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import tw from 'twrnc';
import ToDoApp from './components/ToDoApp';
import ReviewApp from './components/ReviewApp';

export default function App() {
  const [whichApp, setWhichApp] = React.useState(null);

  const classes = tw.style(
  'flex items-center mt-10 p-4 android:pt-2', 
  whichApp === 'toDoApp' ? 'bg-pink-200' 
  : whichApp === 'reviewApp' ? 'bg-green-200'
  : 'bg-white'
  );



  return (
    <>
      <View style={tw.style('mt-10 p-4 gap-4')}>
        <Button
          onPress={() => setWhichApp('toDoApp')}
          title='ToDo App'
        />
        <Button
          onPress={() => setWhichApp('reviewApp')}
          title='Review App'
        />
        {whichApp === 'toDoApp' ? <ToDoApp /> :
        whichApp === 'reviewApp' ? <ReviewApp /> : null}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
});
