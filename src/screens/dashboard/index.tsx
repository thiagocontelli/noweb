import { Button, FlatList, HStack, Image, Input, ScrollView, Text, VStack, View, useTheme } from 'native-base';
import Icon from 'react-native-remix-icon';
import { SafeAreaView } from 'react-native-safe-area-context';
import userPicture from '../../assets/user-picture.png';
import { Box } from '../../components';
import { ListItem } from './components';
import { mockData } from './mockData';

export function Dashboard() {
  const theme = useTheme()

  return (
    <ScrollView>
      <SafeAreaView style={{ padding: 28 }}>
        <Input
          InputLeftElement={
            <View ml={2}>
              <Icon name={'search-line'} size={20} color={theme.colors.gray[500]} />
            </View>
          }
          placeholder="Buscar projeto"
        />
        <VStack mt={10} space={4}>
          <VStack>
            <Text fontWeight={'semibold'} fontSize={'2xl'}>Olá</Text>
            <Text fontWeight={'medium'} fontSize={'2xl'}>Kathryn</Text>
          </VStack>
          <Box bg={'primary.400'} p={6}>
            <HStack justifyContent={'space-between'}>
              <VStack flex={1} justifyContent={'space-between'} alignItems={'flex-start'}>
                <VStack space={1}>
                  <Text fontSize={'lg'} fontWeight={'semibold'}>{`Seus \nprojetos`}</Text>
                  <Text fontSize={'xs'} color='text.500'>2 de 4 completos</Text>
                </VStack>
                <Button
                  p={0}
                  borderBottomWidth={2}
                  borderBottomColor={'red.500'}
                  colorScheme={'red'}
                  variant='ghost'
                >
                  Ver mais
                </Button>
              </VStack>
              <Image
                size={'xl'}
                borderRadius={'full'}
                source={userPicture}
                alt='User Picture'
              />
            </HStack>
          </Box>

          <Text fontSize={'lg'} fontWeight={'medium'}>Daily Review</Text>

          <FlatList
            pb={24}
            data={mockData}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <ListItem item={item} />}
          />
        </VStack>
      </SafeAreaView>
    </ScrollView>
  );
}
