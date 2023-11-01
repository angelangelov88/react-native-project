import React from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import tw from 'twrnc';

export default function AddToDo({ addItem }) {
  const [text, setText] = React.useState('');

  const handleChange = (val) => {
    setText(val);
  };

  return (
    <View style={tw.style('h-12')}>
      <TextInput
        style={tw.style('mb-3 px-2 py-2 border-b border-b-gray-400')}
        placeholder='new todo...'
        onChangeText={handleChange}
        value={text}
      />
      <Button
        title='add todo'
        color='coral'
        onPress={() => {
          addItem(text);
          Alert.alert('New Item Added', `${text} has been added`)
          setText('');
        }}
        disabled={text.length < 1}
      />
    </View>
  );
}