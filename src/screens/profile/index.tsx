import { Avatar, HStack, SectionList, Text, VStack, useTheme } from "native-base";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-remix-icon";
import userPicture from '../../assets/user-picture.png';
import { Box } from "../../components";
import { menuItems } from "./mockData";

export function Profile () {
  const theme = useTheme()
  
  return (
    <VStack px={5}>
      <Box>
        <HStack space={3} alignItems={'center'}>
          <Avatar size={'lg'} source={userPicture} />

          <VStack>
            <Text fontWeight={'semibold'} fontSize={'xl'}>Kathryn</Text>
            <Text color={'text.500'}>kathryn@email.com</Text>
          </VStack>
        </HStack>
      </Box>

      <SectionList
        sections={[{
          title: 'Menu',
          data: menuItems
        }]}
        renderItem={({item}) => (
          <TouchableOpacity>
            <Box mb={3}>
              <HStack justifyContent={'space-between'}>
                <HStack
                  alignItems={'center'}
                  space={5}
                >
                  <Icon name={item.icon} color={theme.colors.gray[500]} />
                  <Text fontWeight={'semibold'}>{item.title}</Text>
                </HStack>

                <Icon name='arrow-right-s-line' color={theme.colors.gray[500]} />
              </HStack>
            </Box>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => <Text mt={6} mb={3} fontWeight={'semibold'} fontSize={'lg'}>{title}</Text>}
      />
    </VStack>
  );
}
