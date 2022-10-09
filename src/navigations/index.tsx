import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import PostDetails from '../screens/PostDetails';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen
        name={'Home'}
        component={Home}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name={'PostDetails'}
        component={PostDetails}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
