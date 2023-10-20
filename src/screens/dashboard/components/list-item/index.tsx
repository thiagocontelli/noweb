import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HStack, Text, VStack, useTheme } from "native-base";
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-remix-icon';
import { Box } from "../../../../components/box";
import { RootStackParamsList } from "../../../../config/root-stack-params";
import { MockItem } from "../../mockData";

type Props = {
  item: MockItem
} & NativeStackScreenProps<RootStackParamsList>

export function ListItem({ item, navigation }: Props) {
  const theme = useTheme()
  const dateFormatter = new Intl.DateTimeFormat('default', { hour: 'numeric', minute: 'numeric', hour12: true })

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Project')}>
      <Box mb={4}>
        <HStack justifyContent={'space-between'} alignItems={'center'}>
          <HStack space={3} alignItems={'center'}>
            <Icon name={'briefcase-fill'} color={theme.colors.gray[500]} />
            <VStack>
              <Text fontSize={'md'} fontWeight={'medium'}>{item.title}</Text>
              <Text color={'text.500'} fontWeight={'medium'}>{dateFormatter.format(item.time)} • {item.status}</Text>
            </VStack>
          </HStack>
          <Icon name={'arrow-right-s-line'} color={theme.colors.gray[500]} />
        </HStack>
      </Box>
    </TouchableOpacity>
  );
}
