import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';

export default function Header() {
  return (
    <View style={tw.style('h-20 pt-10 bg-orange-300')}>
      <Text style={tw.style('text-center text-white text-lg font-bold')}>My ToDos</Text>
    </View>
  );
}