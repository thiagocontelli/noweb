import { useNavigation } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useTheme } from "native-base"
import { TouchableOpacity } from "react-native"
import Icon from 'react-native-remix-icon'
import { Box } from ".."
import { SCREENS } from "../../constants/screens"
import { NewDemand } from "../../screens"

const Stack = createNativeStackNavigator()

export function StackNavigator() {
  const theme = useTheme()
  const navigation = useNavigation()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREENS.NEW_DEMAND_STACK}
        component={NewDemand}
        options={{
          headerTitle: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Box p={3} borderRadius={'2xl'}>
                <Icon name='arrow-left-line' color={theme.colors.gray[500]} />
              </Box>
            </TouchableOpacity>
          ),
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: 'transparent',
          },
        }}
      />
    </Stack.Navigator>
  )
}