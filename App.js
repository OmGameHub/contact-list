import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import ContactList from './screens/ContactList';
import UserProfile from './screens/UserProfile';

export default class App extends React.Component {
  render() {
    return ( <RootStack /> );
  }
}

const RootStack = createStackNavigator({
  Home: ContactList,
  Profile: UserProfile
},
{
  headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});