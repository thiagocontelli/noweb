import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, HStack, useTheme } from 'native-base';
import { TouchableOpacity, View } from 'react-native';

type Props = BottomTabBarProps

export function TabBar({ descriptors, navigation, state }: Props) {
  const theme = useTheme()

  return (
    <View style={{ backgroundColor: 'transparent', position: 'absolute', left: 0, bottom: 0, right: 0 }}>
      <LinearGradient colors={['rgba(255, 255, 255, 0.025)', 'rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 1)']}>
        <HStack mb={6} mt={8} mx={4} justifyContent={'space-between'} alignItems={'center'}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key]

            const isFocused = state.index === index

            function onPress() {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, { merge: true });
              }
            };

            function onLongPress() {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            function getIcon(color: string = isFocused ? theme.colors.primary[600] : theme.colors.gray[400], size: number = 32) {
              return options.tabBarIcon && options.tabBarIcon({ color, focused: isFocused, size })
            }

            return (
              <View key={index}>
                {index === 2 ? (
                  <Button
                    onPress={onPress}
                    onLongPress={onLongPress}
                    borderRadius={24}
                    height={16}
                    width={16}
                    background={isFocused ? 'primary.800' : undefined}
                  >
                    {getIcon('white', 40)}
                  </Button>
                ) : (
                  <TouchableOpacity
                    style={{
                      backgroundColor: isFocused ? theme.colors.primary[50] : undefined,
                      padding: 10,
                      borderRadius: 16
                    }}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    accessibilityRole="button"
                    accessibilityState={isFocused ? { selected: true } : {}}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                  >
                    {getIcon()}
                  </TouchableOpacity>
                )}
              </View>
            )
          })}
        </HStack>
      </LinearGradient>
    </View>
  );
}
