import { FlatList, HStack, Modal, Text, VStack, View, useTheme } from 'native-base';
import React, { useState } from 'react';
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-remix-icon';
import { Box } from "../../../components";
import { ListItem, projectTypes } from "../mockData";
import { useNewDemand } from '../use-new-demand';

export function ProjectType() {
  const theme = useTheme()
  const {
    onProjectTypeChange,
    projectType,
    showError
  } = useNewDemand()

  const showProjectTypeError = showError && !projectType

  const [isOpen, setIsOpen] = useState(false)

  function onPress(projectType: ListItem) {
    onProjectTypeChange(projectType)
    setIsOpen(false)
  }

  return (
    <View>
      <VStack space={2}>
        <Text
          fontWeight={'medium'}
        >
          Tipo do projeto
        </Text>
        <TouchableOpacity onPress={() => setIsOpen(true)}>
          <Box
            borderRadius={'xl'}
            borderWidth={showProjectTypeError ? 1 : 0}
            borderColor={showProjectTypeError ? 'red.500' : undefined}
          >
            <HStack
              justifyContent={'space-between'}
            >
              <Icon name={'briefcase-fill'} color={theme.colors.gray[500]} />
              <Text
                fontWeight={'medium'}
              >
                {projectType?.title ?? 'Tipo do projeto'}
              </Text>
              <Icon name={'qr-scan-2-line'} color={theme.colors.primary[600]} />
            </HStack>
          </Box>
        </TouchableOpacity>
      </VStack>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Tipo do projeto</Modal.Header>
          <Modal.Body>
            <FlatList
              scrollEnabled={false}
              data={projectTypes}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => onPress(item)}>
                  <Box p={4} mb={2}>
                    <Text fontWeight={'medium'}>{item.title}</Text>
                  </Box>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
            />
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </View>
  );
}
