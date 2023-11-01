import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { MaterialIcons } from '@expo/vector-icons';

export default function ToDoItem({ item, pressHandler }) {

  return (
    <TouchableOpacity
      style={tw.style('')}
      // onPress={() => pressHandler(item.key)}
    >
      <View style={tw.style('flex-row items-center justify-between p-4 mt-4 border border-gray-400 border-dashed rounded-lg')}>
        <Text style={tw.style('')}>
          {item.text}
        </Text>
        <MaterialIcons name="delete" size={24} color="gray" onPress={() => pressHandler(item.key)}
        />
      </View>
    </TouchableOpacity>
  );
}