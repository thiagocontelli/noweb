import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, VStack } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamsList } from "../../config/root-stack-params";

type Props = NativeStackScreenProps<RootStackParamsList>

export function Project ({ navigation }: Props) {
  return (
    <SafeAreaView>
      <VStack p={5} space={5}>
        <Text>Project Screen</Text>

        <Button onPress={() => navigation.goBack()}>Go back</Button>
      </VStack>
    </SafeAreaView>
  );
}
