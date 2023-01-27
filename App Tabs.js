// npm install @react-navigation/bottom-tabs

import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <LittleLemonHeader />
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({size}) => {
                let iconName;
                if (route.name === 'Welcome') {
                  iconName = 'ios-home';
                } else if (route.name === 'Login') {
                  iconName = 'ios-enter';
                }
                return <Ionicons name={iconName} size={size} />;
              },
            })}
            initialRouteName="Login">
            <Tab.Screen name="Welcome" component={WelcomeScreen} />
            <Tab.Screen name="Login" component={LoginScreen} />
          </Tab.Navigator>
        </View>
        <View style={styles.footerContainer}>
          <LittleLemonFooter />
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});
