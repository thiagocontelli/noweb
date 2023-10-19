import { Box, HStack, Text, VStack, useTheme } from "native-base";
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-remix-icon';
import { MockItem } from "../../mockData";

type Props = {
  item: MockItem
}

export function ListItem({ item }: Props) {
  const theme = useTheme()
  const dateFormatter = new Intl.DateTimeFormat('en-us', { hour: 'numeric', minute: 'numeric' })

  return (
    <TouchableOpacity>
      <Box mb={4} px={6} py={4}>
        <HStack justifyContent={'space-between'} alignItems={'center'}>
          <HStack space={3} alignItems={'center'}>
            <Icon name={'briefcase-fill'} color={theme.colors.gray[500]} />
            <VStack>
              <Text fontSize={'md'} fontWeight={'medium'}>{item.title}</Text>
              <Text color={'text.500'} fontWeight={'medim'}>{dateFormatter.format(item.time)} • {item.status}</Text>
            </VStack>
          </HStack>
          <Icon name={'arrow-right-s-line'} color={theme.colors.gray[500]} />
        </HStack>
      </Box>
    </TouchableOpacity>
  );
}
