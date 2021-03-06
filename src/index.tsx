import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import Sign from './components/signature_pad';
import { DeviceEventEmitter } from 'react-native';

const Stack = createStackNavigator();

const CronPayView = (props: any) => {
  DeviceEventEmitter.addListener('event.onClose', (_) => closed());
  DeviceEventEmitter.addListener(
    'event.onMandateCreated',
    (mandateResponse: any) => mandateCreated(mandateResponse)
  );

  function closed(): void {
    props.onClose();
  }

  function mandateCreated(mandateResponse: any): void {
    props.onMandateCreated(mandateResponse);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="Home"
          component={Home}
          initialParams={{ token: props.apiKey }}
        />
        <Stack.Screen name="Sign" component={Sign} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CronPayView;
