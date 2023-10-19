import { FlatList, HStack, Modal, Text, VStack, View, useTheme } from 'native-base';
import React, { useState } from 'react';
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-remix-icon';
import { Box } from "../../../components";
import { ListItem, deadlines, urgencies } from "../mockData";
import { useNewDemand } from '../use-new-demand';

export function Deadline() {
  const theme = useTheme()
  const {
    deadline,
    onDeadlineChange,
    onUrgencyChange,
    urgency,
    showError
  } = useNewDemand()
  const [urgencyIsOpen, setUrgencyIsOpen] = useState(false)
  const [deadlineIsOpen, setDeadlineIsOpen] = useState(false)
  const showUrgencyError = showError && !urgency
  const showDeadlineError = showError && !deadline

  function onPressUrgency(urgency: ListItem) {
    onUrgencyChange(urgency)
    setUrgencyIsOpen(false)
  }

  function onPressDeadline(deadline: ListItem) {
    onDeadlineChange(deadline)
    setDeadlineIsOpen(false)
  }

  return (
    <View>
      <VStack space={2}>
        <Text
          fontWeight={'medium'}
        >
          Urgência & Tempo esperado
        </Text>
        <HStack alignItems={'center'} space={4}>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => setUrgencyIsOpen(true)}>
            <Box
              px={2}
              py={4}
              borderRadius={'xl'}
              borderWidth={showUrgencyError ? 1 : 0}
              borderColor={showUrgencyError ? 'red.500' : undefined}
            >
              <HStack
                justifyContent={'space-between'}
                alignItems={'center'}
                flex={1}
              >
                <Icon name={'error-warning-fill'} color={theme.colors.gray[500]} />
                <Text
                  fontWeight={'medium'}
                >
                  {urgency?.title ?? 'Urgência'}
                </Text>
                <Icon name={'arrow-down-s-fill'} color={theme.colors.gray[500]} />
              </HStack>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => setDeadlineIsOpen(true)}>
            <Box
              px={2}
              py={4}
              borderRadius={'xl'}
              borderWidth={showDeadlineError ? 1 : 0}
              borderColor={showDeadlineError ? 'red.500' : undefined}
            >
              <HStack
                justifyContent={'space-between'}
                alignItems={'center'}
                flex={1}
              >
                <Icon name={'calendar-fill'} color={theme.colors.gray[500]} />
                <Text
                  fontWeight={'medium'}
                >
                  {deadline?.title ?? 'Tempo'}
                </Text>
                <Icon name={'arrow-down-s-fill'} color={theme.colors.gray[500]} />
              </HStack>
            </Box>
          </TouchableOpacity>
        </HStack>
      </VStack>

      <Modal isOpen={urgencyIsOpen} onClose={() => setUrgencyIsOpen(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Urgência</Modal.Header>
          <Modal.Body>
            <FlatList
              data={urgencies}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => onPressUrgency(item)}>
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

      <Modal isOpen={deadlineIsOpen} onClose={() => setDeadlineIsOpen(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Tempo esperado</Modal.Header>
          <Modal.Body>
            <FlatList
              data={deadlines}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => onPressDeadline(item)}>
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
