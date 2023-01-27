//npm install @react-navigation/drawer
//npx expo install react-native-gesture-handler react-native-reanimated
// https://reactnavigation.org/docs/multiple-drawers/

import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';

import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <LittleLemonHeader />
          <Drawer.Navigator 
              useLegacyImplementation 
              initialRouteName="Login"
              backBehavior="history"
                drawerType="slide"
                drawerContent={SideBar}
                drawerStyle={styles.drawerStyle}>
            <Drawer.Screen name="Welcome" component={WelcomeScreen} />
            <Drawer.Screen name="Login" component={LoginScreen} />
          </Drawer.Navigator>
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

