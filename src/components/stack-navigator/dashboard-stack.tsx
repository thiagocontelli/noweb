import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SCREENS } from "../../constants/screens"
import { Dashboard } from "../../screens/dashboard"
import { Project } from "../../screens/project"

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