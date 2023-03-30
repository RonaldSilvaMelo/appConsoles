import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Nintendo from './Nintendo';
import Playstation from './PlayStation';
import Xbox from './Xbox';
import Home from './Home';

const Stack = createStackNavigator();

export default function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Nintendo" component={Nintendo} />
        <Stack.Screen name="Playstation" component={Playstation} />
        <Stack.Screen name="Xbox" component={Xbox} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
