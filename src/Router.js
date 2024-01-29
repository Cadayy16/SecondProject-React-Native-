/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from "./pages/Welcome"
import MemberSign from './pages/MemberSign';
import MemberResult from './pages/MemberResult';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="WelcomeScreen"
          component={Welcome}
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name='MemberSignScreen'
          component={MemberSign}
        />

        <Stack.Screen 
          name='MemberResultScreen'
          component={MemberResult}
          options={{headerShown:false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  
});

export default App;
