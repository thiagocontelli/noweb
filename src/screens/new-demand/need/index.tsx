import { FlatList, Text, VStack, View, useTheme } from 'native-base';
import React from 'react';
import { TouchableOpacity } from "react-native";
import AdImage from '../../../assets/ad.svg';
import DevelopmentImage from '../../../assets/development.svg';
import IdentityImage from '../../../assets/identity.svg';
import { Box } from "../../../components/box";
import { ListItem, needs } from '../mockData';
import { useNewDemand } from '../use-new-demand';

export function Need() {
  const theme = useTheme()
  const {
    onNeedChange,
    need,
    showError
  } = useNewDemand()

  const showNeedError = showError && !need

  function getImage(item: ListItem) {
    switch (item.title) {
      case 'Identidade':
        return <IdentityImage fill={need?.title === item.title ? 'white' : theme.colors.gray[900]} />
      case 'Anúncios':
        return <AdImage fill={need?.title === item.title ? 'white' : theme.colors.gray[900]} />
      case 'Desenvolvimento':
        return <DevelopmentImage fill={need?.title === item.title ? 'white' : theme.colors.gray[900]} />
    }
  }

  return (
    <View>
      <VStack space={2}>
        <Text
          fontWeight={'medium'}
        >
          Necessidades
        </Text>
        <FlatList
          scrollEnabled={false}
          keyExtractor={item => item.id}
          data={needs}
          numColumns={3}
          contentContainerStyle={{ alignItems: 'stretch' }}
          renderItem={({ item, index }) => (
            <View
              flex={1}
              mr={(index !== needs.length - 2 && index !== needs.length - 1) ? 2 : 0}
              ml={index === needs.length - 1 ? 2 : 0}
            >
              <TouchableOpacity style={{ flex: 1 }} onPress={() => onNeedChange(item)}>
                <Box
                  backgroundColor={need?.title === item.title ? 'primary.600' : 'gray.200'}
                  borderRadius={'xl'}
                  borderWidth={showNeedError ? 1 : 0}
                  borderColor={showNeedError ? 'red.500' : undefined}
                >
                  <VStack alignItems={'center'} space={2}>
                    {getImage(item)}
                    <Text
                      fontWeight={'medium'}
                      fontSize={10}
                      color={need?.title === item.title ? 'white' : 'text.900'}
                      numberOfLines={1}
                    >
                      {item.title}
                    </Text>
                  </VStack>
                </Box>
              </TouchableOpacity>
            </View>
          )}
        />
      </VStack>
    </View>
  );
}
