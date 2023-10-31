import React from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import tw from 'twrnc';

export default function App() {
  const [name, setName] = React.useState('angel');
  const [age, setAge] = React.useState('35');

  const [people, setPeople] = React.useState([
    { name: 'angel', age: 35 },
    { name: 'euan', age: 25 },
    { name: 'john', age: 40 },
    { name: 'lina', age: 30},
    { name: 'jane', age: 20},
    { name: 'joe', age: 50},
    { name: 'jim', age: 45},
    { name: 'jill', age: 55},
  ]);
  const classes = tw.style(
  'flex items-center mt-10 p-4 android:pt-2', 
  name === 'angel' ? 'bg-pink-200' 
  : name === 'euan' ? 'bg-green-200'
  : 'bg-white'
  );

  return (
    <>
      {/* <View style={classes}>
        <View style={tw.style('mt-4')}>
          <Button
            title='Angel'
            onPress={() => { setName('angel'); setAge('35'); }}
          />
        </View>
        <View style={tw`mt-4`}>
          <Button
            title='Euan'
            onPress={() => { setName('euan'); setAge('25'); }}
          />
        </View>
        <Text>Enter name:</Text>
        <TextInput
          style={tw`border border-black p-2 m-3 w-48`} 
          placeholder='e.g.John Doe'
          value={name}
          onChangeText={(val) => setName(val)}
        />
        <Text>Enter age:</Text>
        <TextInput
          style={tw`border border-black p-2 m-3 w-48`}
          placeholder='e.g. 99'
          value={age}
          onChangeText={(val) => setAge(val)}
        />
        <Text>My name is {name} and my age is {age}</Text>
      </View> */}
      {/* <ScrollView style={tw`px-5`}>
        {people.map((person, index) => (
          <View key={index} style={tw`bg-gray-200 p-2 m-2`}>
            <Text>{person.name}</Text>
            <Text>{person.age}</Text>
          </View>
        ))}
      </ScrollView> */}
      <FlatList
        data={people}
        renderItem={({ item }) => (
          <View style={tw`bg-gray-200 p-2 m-2`}>
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
          </View>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
});
