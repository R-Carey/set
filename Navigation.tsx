import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProjectScreen from './screens/ProjectScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProjectScreen">
        {/* Add your screen components as screens in the stack */}
        <Stack.Screen name="ProjectScreen" component={ProjectScreen} />
        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
