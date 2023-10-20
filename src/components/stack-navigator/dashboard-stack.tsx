import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SCREENS } from "../../constants/screens"
import { Dashboard, Project } from "../../screens"

const Stack = createNativeStackNavigator()

export function DashboardStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={SCREENS.DASHBOARD}
        component={Dashboard}
      />
      <Stack.Screen
        name={SCREENS.PROJECT}
        component={Project}
      />
    </Stack.Navigator>
  )
}