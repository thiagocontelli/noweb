import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import Icon from 'react-native-remix-icon';
import { TabBar } from './src/components';
import { theme } from './src/config/theme';
import { SCREENS } from './src/constants/screens';
import { Calendar, Dashboard, Message, NewDemand, Profile } from './src/screens';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <TabBar {...props} />}>
            <Tab.Screen options={{ tabBarIcon: ({ color }) => <Icon name={'dashboard-fill'} color={color} /> }} name={SCREENS.DASHBOARD} component={Dashboard} />
            <Tab.Screen options={{ tabBarIcon: ({ color }) => <Icon name={'calendar-fill'} color={color} /> }} name={SCREENS.CALENDAR} component={Calendar} />
            <Tab.Screen options={{ tabBarIcon: ({ color }) => <Icon name={'add-fill'} color={color} /> }} name={SCREENS.NEW_DEMAND} component={NewDemand} />
            <Tab.Screen options={{ tabBarIcon: ({ color }) => <Icon name={'message-3-fill'} color={color} /> }} name={SCREENS.MESSAGE} component={Message} />
            <Tab.Screen options={{ tabBarIcon: ({ color }) => <Icon name={'user-4-fill'} color={color} /> }} name={SCREENS.PROFILE} component={Profile} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
