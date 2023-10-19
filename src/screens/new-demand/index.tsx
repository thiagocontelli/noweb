import { ScrollView, Text, VStack } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { Deadline } from "./deadline";
import { Need } from "./need";
import { Notification } from "./notification";
import { ProjectType } from "./project-type";
import { Send } from "./send";
import { NewDemandContextProvider } from "./use-new-demand";

export function NewDemand() {
  return (
    <ScrollView>
      <SafeAreaView style={{ padding: 28, flex: 1 }}>
        <NewDemandContextProvider>
          <VStack space={5}>
            <Text
              fontWeight={'semibold'}
              fontSize={'2xl'}
            >
              Nova demanda
            </Text>

            <ProjectType />

            <Deadline />

            <Need />

            <Notification />

            <Send />
          </VStack>
        </NewDemandContextProvider>
      </SafeAreaView>
    </ScrollView>
  );
}
