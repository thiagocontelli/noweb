import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from 'react-native-remix-icon'
import { StackNavigator, TabBar } from '..'
import { SCREENS } from "../../constants/screens"
import { Calendar, Dashboard, Message, Profile } from "../../screens"

const Tab = createBottomTabNavigator()

export function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen options={{ tabBarIcon: ({ color }) => <Icon name={'dashboard-fill'} color={color} /> }} name={SCREENS.DASHBOARD} component={Dashboard} />
      <Tab.Screen options={{ tabBarIcon: ({ color }) => <Icon name={'calendar-fill'} color={color} /> }} name={SCREENS.CALENDAR} component={Calendar} />
      <Tab.Screen options={{ tabBarIcon: ({ color }) => <Icon name={'add-fill'} color={color} /> }} name={SCREENS.NEW_DEMAND} component={StackNavigator} />
      <Tab.Screen options={{ tabBarIcon: ({ color }) => <Icon name={'message-3-fill'} color={color} /> }} name={SCREENS.MESSAGE} component={Message} />
      <Tab.Screen options={{ tabBarIcon: ({ color }) => <Icon name={'user-4-fill'} color={color} /> }} name={SCREENS.PROFILE} component={Profile} />
    </Tab.Navigator>
  )
}