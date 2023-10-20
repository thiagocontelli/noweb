import { Avatar, FlatList, HStack, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-remix-icon';
import { Box } from "../../components";
import { chats } from "./mockData";

export function Message() {
  return (
    <FlatList
      data={chats}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 200 }}
      renderItem={({ item }) => (
        <TouchableOpacity style={{ marginBottom: 10 }}>
          <Box>
            <HStack space={2} alignItems={'center'} justifyContent={'space-between'}>
              <Avatar source={{ uri: item.image }} />

              <VStack flex={1}>
                <Text fontWeight={'semibold'}>{item.name}</Text>
                <Text color={'text.500'} numberOfLines={1}>{item.lastMessage}</Text>
              </VStack>
              <Icon name='arrow-right-s-line' />
            </HStack>
          </Box>
        </TouchableOpacity>
      )}
    />
  );
}
