/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DP3TScreen from './src/DP3TScreen';

const Tab = createBottomTabNavigator();

interface Props { }
interface State {
}

class App extends React.Component<Props, State>{
  constructor(props: any) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="DP3T" component={DP3TScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </>
    );
  }
};

export default App;