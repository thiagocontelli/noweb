import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Text } from "native-base"
import Icon from 'react-native-remix-icon'
import { NewDemandStack, TabBar } from '..'
import { SCREENS } from "../../constants/screens"
import { Calendar, Dashboard, Message, Profile } from "../../screens"
import { DashboardStack } from "../stack-navigator/dashboard-stack"

const Tab = createBottomTabNavigator()

export function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, headerTitleAlign: 'left' }} tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen options={{ tabBarIcon: ({ color }) => <Icon name={'dashboard-fill'} color={color} /> }} name={SCREENS.DASHBOARD} component={DashboardStack} />
      <Tab.Screen options={{ tabBarIcon: ({ color }) => <Icon name={'calendar-fill'} color={color} /> }} name={SCREENS.CALENDAR} component={Calendar} />
      <Tab.Screen options={{ tabBarIcon: ({ color }) => <Icon name={'add-fill'} color={color} /> }} name={SCREENS.NEW_DEMAND} component={NewDemandStack} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <Icon name={'message-3-fill'} color={color} />,
          headerTitle: () => <Text fontWeight={'semibold'} fontSize={'2xl'}>Mensagens</Text>,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerShown: true
        }}
        name={SCREENS.MESSAGE}
        component={Message}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <Icon name={'user-4-fill'} color={color} />,
          headerTitle: () => <Text fontWeight={'semibold'} fontSize={'2xl'}>Perfil</Text>,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerShown: true
        }}
        name={SCREENS.PROFILE}
        component={Profile}
      />
    </Tab.Navigator>
  )
}