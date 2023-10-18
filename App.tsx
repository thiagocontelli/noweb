import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import { NativeBaseProvider, Text } from 'native-base';
import { theme } from './src/config/theme';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  
  return (
    <NativeBaseProvider theme={theme}>
      <Text>Hello world!</Text>
    </NativeBaseProvider>
  );
}
