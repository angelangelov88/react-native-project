import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

export default function ToDoItem({ item, pressHandler }) {

  return (
    <TouchableOpacity
      style={tw.style('')}
      onPress={() => pressHandler(item.key)}
    >
      <Text style={tw.style('p-4 mt-4 border border-gray-400 border-dashed rounded-lg')}>{item.text}</Text>
    </TouchableOpacity>
  );
}